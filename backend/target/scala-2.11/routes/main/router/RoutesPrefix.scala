
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/romain/Projects/perso/play-framework-react-isomorphic/backend/conf/routes
// @DATE:Fri Nov 25 17:25:25 CET 2016


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
