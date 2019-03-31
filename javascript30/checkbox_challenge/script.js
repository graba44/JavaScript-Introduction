const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    // Check if they had the shift key down
    // And check that they are checking it

    let inBetween = false;
    if(e.shiftKey && this.checked){
        // Go ahead and do what we please
        // Loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox ===lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
            }

        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));