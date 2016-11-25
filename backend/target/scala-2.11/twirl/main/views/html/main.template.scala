
package views.html

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object main_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class main extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template2[String,Html,play.twirl.api.HtmlFormat.Appendable] {

  /*
 * This template is called from the `index` template. This template
 * handles the rendering of the page header and body tags. It takes
 * two arguments, a `String` for the title of the page and an `Html`
 * object to insert into the body of the page.
 */
  def apply/*7.2*/(title: String)(content: Html):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*7.32*/("""

"""),format.raw/*9.1*/("""<!DOCTYPE html>
<html lang="en">
    <head>
        """),format.raw/*12.62*/("""
        """),format.raw/*13.9*/("""<title>"""),_display_(/*13.17*/title),format.raw/*13.22*/("""</title>
        <link rel="stylesheet" media="screen" href=""""),_display_(/*14.54*/routes/*14.60*/.Assets.versioned("stylesheets/main.css")),format.raw/*14.101*/("""">
        <link rel="shortcut icon" type="image/png" href=""""),_display_(/*15.59*/routes/*15.65*/.Assets.versioned("images/favicon.png")),format.raw/*15.104*/("""">
    </head>
    <body>
        """),format.raw/*19.32*/("""
        """),_display_(/*20.10*/content),format.raw/*20.17*/("""
    """),format.raw/*21.5*/("""</body>

    Welcome !
    """),format.raw/*24.39*/("""
    """),format.raw/*25.5*/("""<div id="post-list"></div>
    <br/>
    <script src=""""),_display_(/*27.19*/routes/*27.25*/.Assets.versioned("javascripts/app-frontend.js")),format.raw/*27.73*/("""" type="text/javascript"></script>
</html>
"""))
      }
    }
  }

  def render(title:String,content:Html): play.twirl.api.HtmlFormat.Appendable = apply(title)(content)

  def f:((String) => (Html) => play.twirl.api.HtmlFormat.Appendable) = (title) => (content) => apply(title)(content)

  def ref: this.type = this

}


}

/*
 * This template is called from the `index` template. This template
 * handles the rendering of the page header and body tags. It takes
 * two arguments, a `String` for the title of the page and an `Html`
 * object to insert into the body of the page.
 */
object main extends main_Scope0.main
              /*
                  -- GENERATED --
                  DATE: Fri Nov 25 18:00:48 CET 2016
                  SOURCE: /Users/romain/Projects/perso/play-framework-react-isomorphic/backend/app/views/main.scala.html
                  HASH: 9bcb1dbdc3b66f755715dd779b1ad44d90773fa5
                  MATRIX: 784->260|909->290|937->292|1017->397|1053->406|1088->414|1114->419|1203->481|1218->487|1281->528|1369->589|1384->595|1445->634|1507->758|1544->768|1572->775|1604->780|1659->841|1691->846|1773->901|1788->907|1857->955
                  LINES: 25->7|30->7|32->9|35->12|36->13|36->13|36->13|37->14|37->14|37->14|38->15|38->15|38->15|41->19|42->20|42->20|43->21|46->24|47->25|49->27|49->27|49->27
                  -- GENERATED --
              */
          