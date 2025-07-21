# Gayas Thasmika - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Bootstrap. Features a beautiful UI/UX design with interactive elements and smooth animations.

## 🚀 Features

### ✨ Modern Design

- Clean and professional layout
- Responsive design for all devices
- Beautiful gradient backgrounds
- Modern typography with Google Fonts
- Smooth animations and transitions

### 🎯 Interactive Elements

- **Mouse Mover Effect**: Custom cursor with follower animation
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Active Navigation**: Highlights current section in navigation
- **Hover Effects**: Interactive cards and buttons
- **Parallax Effects**: Subtle parallax scrolling
- **Typing Animation**: Animated hero title

### 📱 Responsive Design

- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation
- Adaptive layouts

### 📧 Contact Form

- Functional contact form
- Form validation
- Email integration ready
- Success/error notifications

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📁 File Structure

```
porfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── asserts/
    ├── img/
    │   └── profile photo.jpg
    └── files/
        ├── gayas thasmika cover letter.pdf
        └── gayas thasmika's resume.pdf
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content to match your information

### Local Development

For local development, you can use any of these methods:

#### Method 1: Direct File Opening

Simply double-click `index.html` to open in your browser.

#### Method 2: Live Server (Recommended)

If you have VS Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Method 3: Python HTTP Server

```bash
# Navigate to project directory
cd porfolio

# Start Python server
python -m http.server 8000

# Open browser and go to
# http://localhost:8000
```

#### Method 4: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd porfolio

# Start server
http-server

# Open browser and go to the displayed URL
```

## 📧 Email Integration

The contact form is ready for email integration. Here are several options:

### Option 1: EmailJS (Recommended for beginners)

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create** an email service (Gmail, Outlook, etc.)
3. **Create** an email template
4. **Update** the JavaScript code:

```javascript
// In script.js, replace the sendEmail function:
function sendEmail(formData) {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData).then(
    function (response) {
      showNotification("Message sent successfully!", "success");
      contactForm.reset();
    },
    function (error) {
      showNotification("Failed to send message. Please try again.", "error");
    }
  );
}
```

5. **Add** EmailJS SDK to your HTML:

```html
<!-- Add this before closing </body> tag -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_USER_ID");
</script>
```

### Option 2: Formspree

1. **Sign up** at [Formspree](https://formspree.io/)
2. **Create** a new form
3. **Update** the form action in HTML:

```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  id="contactForm"
></form>
```

### Option 3: Netlify Forms

1. **Deploy** to Netlify
2. **Add** `netlify` attribute to form:

```html
<form netlify id="contactForm"></form>
```

### Option 4: Custom Backend

For a custom solution, you can create your own backend API and update the `sendEmail` function accordingly.

## 🎨 Customization

### Colors

Update the CSS custom properties in `styles.css`:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #17a2b8;
  /* ... other colors */
}
```

### Content

1. **Personal Information**: Update name, title, and description in `index.html`
2. **Profile Photo**: Replace `asserts/img/profile photo.jpg` with your photo
3. **Skills**: Modify the skills section with your expertise
4. **Projects**: Add your own projects with images and links
5. **Contact Info**: Update email, phone, and social media links

### Styling

- Modify `styles.css` for custom styling
- Update animations and transitions
- Change fonts by updating Google Fonts link

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Performance Optimization

The website is optimized for performance with:

- Minified external libraries
- Optimized images
- Efficient CSS and JavaScript
- Lazy loading ready
- Compressed assets

## 🚀 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop the project folder to Netlify
2. Your site will be deployed automatically
3. Custom domain can be added

### Vercel

1. Connect your GitHub repository
2. Deploy automatically
3. Custom domain support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📞 Support

If you need help with customization or have questions, feel free to reach out!

---

**Built with ❤️ by Gayas Thasmika**
