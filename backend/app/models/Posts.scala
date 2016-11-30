package models

import play.api.libs.json.Json

case class Post(id: Int, title: String)
object Post {
  implicit val format = Json.format[Post]
}
/**
  * Created by Romain CHIVOT on 25/11/2016.
  */
object Posts {

  lazy val posts = List(
    Post(1, "Post 1"),
    Post(2, "Post 2"),
    Post(3, "Post 3")
  )

}
