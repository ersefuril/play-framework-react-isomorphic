package controllers

import javax.inject._

import models.Posts
import play.api._
import play.api.libs.json.{JsArray, JsObject, Json}
import play.api.mvc._
import services.ReactJs

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(reactJs: ReactJs) extends Controller {

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index = Action {
    Ok(views.html.index())
  }

  def getPosts(from: Int) = Action {
    Ok(Json.toJson(Posts.allPosts.take(50)))
  }

  def postPage(server: String) = Action.async {
    if(!server.isEmpty) {
      val postsList = Posts.allPosts.map(p => Json.toJson(p).as[JsObject]) // List[Post] -> List[JsObject]
      val postsAsJson = JsArray(postsList) // List[JsObject] -> JsArray

      // JsArray -> String
      reactJs.renderReact(postsAsJson, server).map { postsAsHtml =>
        Ok(views.html.postsServerRendering(postsAsJson.toString.trim, postsAsHtml.trim))
      }
    } else {
      Future(Ok(views.html.posts()))
    }
  }

}
