// Array of blog post objects
const blogPosts = [
  {
    heading: "Interview with Economist and UX Designer, Maya Louviere",
    paragraph:
      "Maya Louvière is an Economist and UX Designer from Wellington, New Zealand. She has worked with Spotify, Nike, Chews, Makr, and Square. Mia de Silva sat down with the Economist.",
    author: "Demi WillKinsom",
    date: "25 Jan 2025",
    imageUrl: "./images/01_featuredImage.webp",
    authorImage: "./images/01_AuthorImage.jpeg",
    link: "#",
  },
  {
    heading: "Improve Your UI Design Skills: Develop an 'Eye' for Design",
    paragraph:
      "The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an 'eye' for UI design and improve your design skills in no time with practice and focus.",
    author: "John Doe",
    date: "23 Jan 2025",
    imageUrl: "./images/02_featuredImage.webp",
    authorImage: "./images/02_AuthorImage.webp",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "A Relentless Pursuit of Perfection in Product Design",
    paragraph:
      "I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and an even greater distinction between the people who valued quality and those who prioritized convenience.",
    author: "Jane Smith",
    date: "22 Jan 2025",
    imageUrl: "./images/03_featuredImage.webp",
    authorImage: "./images/03_AuthorImage.webp",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "A Continually Unfolding History - Hillview by Made by Hand",
    paragraph:
      "A single building occupies the hillside at Hillview, a historic 240-hectare former sheep farm on Tasmania's Bruny Island. The much-lauded work of Made by Hand Architect.",
    author: "Amara",
    date: "20 Jan 2025",
    imageUrl: "./images/04_featuredImage.webp",
    authorImage: "./images/04_AuthorImage.webp",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "How Remote Collaboration Makes Us Better Product Designers",
    paragraph:
      "Collaboration can make our teams stronger, and our individual designs better. Remote work has brought new challenges to remote collaboration, but thankfully, technology and communication tools have made it easier to stay connected and work efficiently from anywhere.",
    author: "Mirella",
    date: "19 Jan 2025",
    imageUrl: "./images/05_featuredImage.webp",
    authorImage: "./images/05_AuthorImage.webp",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "Best Books on Scaling Your Early-Stage Startup",
    paragraph:
      "This collection of the best startup books for scaling your startup are packed full with valuable and actionable advice to take your business to the next level",
    author: "Matteo",
    date: "18 Jan 2025",
    imageUrl: "./images/06_featuredImage.webp",
    authorImage: "./images/06_AuthorImage.avif",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "How to Run a Successful Business With Your Partner",
    paragraph:
      "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith. We spoke to a dozen successful businesses about how they navigated the challenges, maintained balance, and built a strong foundation for both their relationship and their company.",
    author: "Sebastian ",
    date: "15 Jan 2025",
    imageUrl: "./images/07_featuredImage.webp",
    authorImage: "./images/07_AuthorImage.jpeg",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "Why Food Matters - Disease Prevention & Treatment",
    paragraph:
      "Eating more plants and less meat has been tied to a longer life and a reduced risk of cardiovascular disease in a new study, with a 16% lower risk of cardiovascular disease observed in those who followed a plant-based diet.",
    author: "Yasmin",
    date: "12 Jan 2025",
    imageUrl: "./images/08_featuredImage.webp",
    authorImage: "./images/08_AuthorImage.jpeg",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
  {
    heading: "Conversations with London Makr & Co",
    paragraph:
      "We sat down with London's fast-growing brand and product design studio, Makr & Co. to find out how they've used Untitled UI to 2x their revenue.",
    author: "Julian ",
    date: "10 Jan 2025",
    imageUrl: "./images/09_featuredImage.webp",
    authorImage: "./images/09_AuthorImage.avif",
    link: "https://blogpostsbyblogwebsphere.netlify.app/",
  },
];

let displayedPosts = 6; // Initial number of posts to display

// Function to render the blog posts
function renderBlogPosts() {
  const container = document.getElementById("blogPostsContainer");

  const postsToDisplay = blogPosts.slice(0, displayedPosts);

  container.innerHTML = "";

  postsToDisplay.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog_post");

    postElement.innerHTML = `
        <div class="blog_post_img">
          <img src="${post.imageUrl}" alt="Image" />
        </div>
        <div class="blog_post_content">
          <div class="blog_post_content_title">
            <h3>${post.heading}</h3>
            <a  href="${post.link}" target="_blank" class="blog_post_content_title_svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
          <div class="blog_post_content_para">
            <p>${post.paragraph}</p>
          </div>
          <div class="blog_post_content_meta">
            <img class="author_img" src="${post.authorImage}" alt="author_img">
            <div class="author_details">
              <p>${post.author}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
              </svg>
              <p>${post.date}</p>
            </div>
          </div>
        </div>
      `;

    container.appendChild(postElement);
  });

  const loadMoreButton = document.querySelector(".btn");
  if (displayedPosts >= blogPosts.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "block";
  }
}

function loadMorePosts() {
  displayedPosts += 3;
  renderBlogPosts();
}

renderBlogPosts();

document.querySelector(".btn").addEventListener("click", loadMorePosts);
