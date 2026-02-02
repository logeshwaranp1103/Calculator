# Modern Calculator

A beautiful, mobile-responsive calculator web application with a modern dark theme, built with vanilla HTML, CSS, and JavaScript.

![Calculator Preview](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek design with vibrant accent colors
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Support** - Full keyboard functionality for power users
- ✨ **Smooth Animations** - Premium micro-interactions and transitions
- 🧮 **Complete Functionality** - All basic operations plus percentage calculations
- ♿ **Accessible** - Keyboard navigation and reduced motion support

## 🚀 Live Demo

[View Live Demo](https://your-calculator-url.vercel.app)

## 📸 Screenshots

### Desktop View
![Desktop Calculator](./screenshots/desktop.png)

### Mobile View
![Mobile Calculator](./screenshots/mobile.png)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties and flexbox/grid
- **JavaScript (ES6+)** - Object-oriented calculator logic
- **Google Fonts** - Inter font family

## 🎯 Calculator Features

### Basic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)
- Percentage (%)

### Special Functions
- **AC** - Clear all
- **DEL** - Delete last digit
- **Decimal Support** - Handle floating-point numbers
- **Chained Operations** - Continuous calculations
- **Error Handling** - Division by zero protection

### Keyboard Shortcuts
- `0-9` - Number input
- `.` - Decimal point
- `+` `-` `*` `/` - Operators
- `Enter` or `=` - Calculate result
- `Escape` or `C` - Clear
- `Backspace` - Delete last digit
- `%` - Percentage

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px
- **Small Mobile**: ≤ 360px
- **Landscape Mode**: Special handling for horizontal orientation

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calculator.git
   cd calculator
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Visit** `http://localhost:8000`

### Deploy to Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

Or simply connect your GitHub repository to Vercel for automatic deployments.

## 📁 Project Structure

```
calculator/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Calculator logic
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
└── vercel.json         # Vercel configuration
```

## 🎨 Design System

### Color Palette
- Background: `#0f0f0f` → `#1a1a1a` (gradient)
- Calculator: `#1e1e1e`
- Display: `#141414`
- Number Buttons: `#2a2a2a`
- Operators: `#ff9500` (orange)
- Equals: `#34c759` (green)
- Functions: `#505050` (gray)

### Typography
- Font Family: Inter (Google Fonts)
- Display: 3rem → 2rem (responsive)
- Buttons: 1.5rem → 1.2rem (responsive)

## 🧪 Testing

### Manual Testing
1. Open the calculator in your browser
2. Test basic operations (addition, subtraction, multiplication, division)
3. Test special functions (AC, DEL, percentage)
4. Test keyboard shortcuts
5. Test responsive design using browser DevTools
6. Test edge cases (division by zero, multiple decimals)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design inspiration from modern calculator apps
- Inter font by Google Fonts
- Icons and badges from shields.io

---

⭐ Star this repo if you found it helpful!
