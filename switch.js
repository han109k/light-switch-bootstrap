/**
 *  Light Switch @version v0.1.2
 *  @author han109k
 */

(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (lightSwitch) {
    darkMode();
    lightSwitch.addEventListener("change", () => {
      lightMode();
    });

    /**
     * @function darkmode
     * @summary: firstly, checks if browser local storage has 'lightSwitch' key
     * if key has 'dark' value then changes the theme to 'dark mode'
     * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
     */
    function darkMode() {
      let isSelected =
        localStorage.getItem("lightSwitch") !== null &&
        localStorage.getItem("lightSwitch") === "dark";

      if (isSelected) {
        document.querySelectorAll(".bg-light").forEach((element) => {
          element.className = element.className.replace(/-light/g, "-dark");
        });

        document.body.classList.add("bg-dark");

        if (document.body.classList.contains("text-dark")) {
          document.body.classList.replace("text-dark", "text-light");
        } else {
          document.body.classList.add("text-light");
        }
        
        // set light switch input to true
        lightSwitch.checked = true;
      }
    }

    /**
     * @function lightmode
     * @summary: check whether the switch is on (checked) or not.
     * If the switch is on then set 'lightSwitch' local storage key and call @function darkmode
     * If the switch is off then it is light mode so, switch the theme and
     *  remove 'lightSwitch' key from local storage
     */
    function lightMode() {
      if (lightSwitch.checked) {
        localStorage.setItem("lightSwitch", "dark");
        darkMode();
      } else {
        document.querySelectorAll(".bg-dark").forEach((element) => {
          element.className = element.className.replace(/-dark/g, "-light");
        });
        document.body.classList.replace("text-light", "text-dark");
        localStorage.removeItem("lightSwitch");
      }
    }
  }
})();
