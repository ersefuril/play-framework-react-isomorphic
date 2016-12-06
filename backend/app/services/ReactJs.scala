package services

import java.io.InputStreamReader
import javax.inject.Singleton
import javax.script.{ScriptEngineManager, ScriptException}

import com.google.inject.Inject
import play.api.Logger
import play.api.libs.json.{JsArray, Json}
import play.api.libs.ws.{WS, WSClient}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
  * Created by vwittal on 14/07/16.
  */
@Singleton
class ReactJs @Inject() (ws: WSClient) {

  lazy val cachedNashorn = {
    println("*** Loading nashorn...")
    val engineManager = new ScriptEngineManager(null).getEngineByName("nashorn")

    engineManager.eval("var global = this; var console = {error: print, log: print, warn: print};")
    engineManager.eval(new InputStreamReader(getClass.getResourceAsStream("/public/javascripts/app-frontend-server.js"))) // Inject javascript build

    engineManager
  }

  def renderReactWithNashorn(jsArray: JsArray): Future[String] = {
    // execute the React app and get the corresponding html string
    val loadingScript = s"app.renderPostList($jsArray);"
    try {
      Future(cachedNashorn.eval(loadingScript).toString)
    } catch  {
      case e: ScriptException =>
        Logger.error(e.toString)
        Future("")
    }
  }

  def renderReactWithNode(jsArray: JsArray): Future[String]= {
    ws.url("http://localhost:8000/render").post(jsArray).map { r =>
      r.body
    }
  }

  def renderReact(jsArray: JsArray, renderMethod: String): Future[String] = {
    if(renderMethod == "node") {
      renderReactWithNode(jsArray)
    } else {
      renderReactWithNashorn(jsArray)
    }
  }

}
