package models

import play.api.libs.json.Json

case class Post(
 id: Int,
 title: String,
 pictureUri: String
)
object Post {
  implicit val format = Json.format[Post]
}
/**
  * Created by Romain CHIVOT on 25/11/2016.
  */
object Posts {

  lazy val posts = List(
    Post(1, "Hodor", "http://i2.kym-cdn.com/entries/icons/facebook/000/015/238/hodor.jpg"),
    Post(2, "Walter White", "http://static.tvtropes.org/pmwiki/pub/images/white_walter_h_7573.jpg"),
    Post(3, "Samuel L Jackson", "http://www.vanityfair.fr/uploads/images/thumbs/201425/1e/vf_samuel_l__jackson_992.jpeg_north_562x_white.jpg"),
    Post(4, "Homer Simpson", "https://s3-eu-central-1.amazonaws.com/knowledgeplaces.com/wp-content/uploads/homer.gif"),
    Post(5, "Gollum", "http://www.classtools.net/_FAKEBOOK/images/g/gollum.jpg"),
    Post(6, "Jack Black", "http://www.jewornotjew.com/img/people/j/jack_black.jpg")
  )

  val allPosts = {
    val max = 500
    (0 to max).map(_ => posts((new util.Random).nextInt(posts.length))).toList
  }

}
