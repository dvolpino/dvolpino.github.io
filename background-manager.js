// JavaScript Document

<style>
    /* Put this global styling in your main CSS file or every HTML page */
    body {
        margin: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* Optional: Default fallback image if they haven't picked one yet */
        background-image: url('background2.jpg'); 
    }
</style>

<script>
    // This runs automatically as soon as any page loads
    window.addEventListener('DOMContentLoaded', () => {
        // Retrieve the saved image path from the browser memory
        const savedBg = localStorage.getItem('userBackground');
        
        // If the user previously picked a background, apply it
        if (savedBg) {
            document.body.style.backgroundImage = "url('" + savedBg + "')";
        }
    });
</script>
