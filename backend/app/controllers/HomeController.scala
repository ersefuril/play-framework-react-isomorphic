package controllers

import javax.inject._

import models.Posts
import play.api._
import play.api.libs.json.{JsArray, JsObject, Json}
import play.api.mvc._
import services.ReactJs

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject() extends Controller {

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
    Ok(Json.toJson(Posts.posts.slice(from, from + 3)))
  }

  def postPage(server: Boolean) = Action {
    if(!server) {
      Ok(views.html.posts())
    } else {
      val postsList = Posts.posts.take(3).map(p => Json.toJson(p).as[JsObject]) // List[Post] -> List[JsObject]
      val postsAsJson = JsArray(postsList) // List[JsObject] -> JsArray
      val postsAsHtml = ReactJs.render(postsAsJson) // JsArray -> String

      Ok(views.html.postsServerRendering(postsAsJson.toString.trim, postsAsHtml.trim))
    }
  }

}
