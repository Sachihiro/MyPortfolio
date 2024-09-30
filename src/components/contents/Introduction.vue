<template>
  <div class="row gx-5">
    <div class="col-sm-6" style="display: flex; justify-content: center;">
    
    <div class="circle-frame">
        <img src="../../assets/2.png" class="rounded" alt="..." 
    style="width:400px; height:400px;">
    </div>
    
    
    </div>
    <div class="col-sm-5 mt-4" style="display: flex; flex-direction: column; justify-content: center;">
        <h3 
        class="mb-4"
        style="text-align: center; display: inline; /* Ensure that the underline is only for the text */
  border-bottom: 1px dotted white; /* Adjust color and thickness as needed */
  padding-bottom: 2px;
   /* Adjust padding if necessary to ensure visibility */">LET ME INTRODUCE MYSELF!</h3>
        <h2>I'm <span>{{ displayedText }}</span>
    <span class="cursor">|</span></h2>
        <p class="text-justify">
            {{ textContent.introduction }}
            

        </p>
        <div class="d-flex" style="gap:0.5rem">
            <button type="button" 
           
            class="btn btn-outline-warning">Resume</button>
            <button type="button" class="btn btn-outline-warning">Contact Me</button>
            
        </div>
        

    </div>
  </div>
</template>

<script>
import textContent from '../utility/introduction.json';
export default {
    data() {
    return {
      textContent: textContent,
      fullText: "Rex",
      displayedText: "",
      typingSpeed: 500,  // Speed for typing
      deletingSpeed: 100, // Speed for deleting
      delayAfterTyping: 1000, // Delay before starting to delete
      loopDelay: 500, // Delay before starting to type again
      isDeleting: false,
      currentIndex: 0,
    };
  },
  computed: {
    greeting() {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    }
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const typeOrDelete = () => {
        if (!this.isDeleting) {
          // Typing effect
          if (this.currentIndex < this.fullText.length) {
            this.displayedText += this.fullText.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(typeOrDelete, this.typingSpeed);
          } else {
            // Start deleting after a delay
            setTimeout(() => {
              this.isDeleting = true;
              typeOrDelete();
            }, this.delayAfterTyping);
          }
        } else {
          // Deleting effect
          if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayedText = this.fullText.substring(0, this.currentIndex);
            setTimeout(typeOrDelete, this.deletingSpeed);
          } else {
            // Start typing again after a delay
            this.isDeleting = false;
            setTimeout(typeOrDelete, this.loopDelay);
          }
        }
      };
      typeOrDelete();
    },
  },
}
</script>

<style scoped>
.row{
    font-family: sans-serif;
    color:whitesmoke;
    font-size: large;
}

.circle-frame {
  width: 350px; /* Set to your desired size */
  height: 350px; /* Must match the width for a perfect circle */
  border-radius: 50%;
  overflow: hidden; /* Ensures the image stays within the circle */
  display: flex; /* Centers the image within the circle */
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Optional: background color */
  padding-bottom: 4rem;
}

.circle-frame img {
  width: 100%;
  height: auto; /* Keeps the image proportional */
}

.text-justify{
    text-align: justify;
}

/**FOR TYPING ANIMATION */
.typing-container {
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>