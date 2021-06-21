(function() {
    let lightSwitch = document.getElementById("lightSwitch");
    if(lightSwitch) {
        darkMode();
        lightSwitch.addEventListener("change", function(e) {
            lightMode();
        });
        function darkMode(checked) {
            if(checked) {
                localStorage.setItem("lightSwitch", "dark");
            }
            let isSelected =
                localStorage.getItem("lightSwitch") !== null &&
                localStorage.getItem("lightSwitch") === "dark";
        
            console.log(isSelected);

            if(isSelected) {
                document.querySelectorAll(".bg-light").forEach(element => {
                    element.className = element.className.replace(/-light/g, "-dark");
                });
                if(document.body.classList.contains("text-dark")) {
                        document.body.classList.replace("bg-light", "bg-dark");
                        document.body.classList.replace("text-dark", "text-light");        
                } else {
                    document.body.classList.add("bg-dark");
                    document.body.classList.add("text-light");        
                }
            }
        }
        function lightMode() {
            if(lightSwitch.checked) {
                darkMode(true);
            } else {
                document.querySelectorAll(".bg-dark").forEach(element => {
                    element.className = element.className.replace(/-dark/g, "-light");
                });
                document.body.classList.replace("bg-dark", "bg-light"); 
                document.body.classList.replace("text-light", "text-dark");
                localStorage.removeItem("lightSwitch");
            }
        }
    }
})();