const React = require('react');
const ReactDom = require('react-dom');

/**
 * @author Bastien Ladron
 * This class helps to work with React applications that can depends of other React applications.
 * It gives tools to render application when it is possible, to have booters in global variable in order to launch an application from other javascript code.
 */
class ReactBoot {
    /**
     * Use this function if you want to have a single script that can render the application in
     * the expected div if it exists, OR create a global booter function that will allow you to use
     * this application like an embedded application in another one.
     * @param componentType The component type which we want to render
     * @param divId The div's id where the component is expected to be rendered
     * @param booterName The name of the booter's global variable that will be created if the expected div doesn't exist
     */
    static boot(componentType, divId, booterName) {
        if(ReactBoot.tryBoot(componentType, divId))
            return;
        else if(booterName)
            ReactBoot.createBooter(componentType, booterName);
        else
            throw new Error("The id tag " + divId + " doesn't exist in the page and there is no variable for the global booter, the application can't be rendered.");
    }

    /**
     * Render the given component type if the expected div exists.
     * No error will be thrown if the div doesn't exist.
     * @param componentType The component type which we want to render
     * @param divId The div's id where the component is expected to be rendered
     */
    static tryBoot(componentType, divId) {
        let element = React.createElement(componentType);
        let expectedDiv = document.getElementById(divId);

        if (expectedDiv) {
            ReactDom.render(element, expectedDiv);
            return true;
        }
        else
            return false;
    }

    /**
     * Create a booter global function that allows to render the component node in a given div when it is called.
     * @param componentType The component type which we want to render
     * @param booterName
     */
    static createBooter(componentType, booterName) {
        window[booterName] = function (divId, props) {
            var element = React.createElement(componentType, props);
            ReactDom.render(element, document.getElementById(divId));
        };
    }
}

module.exports = ReactBoot;