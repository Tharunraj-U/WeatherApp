# 🌤️ Weather Now

A beautiful, modern weather application built with React that provides real-time weather updates for any city worldwide.

![Weather App](https://img.shields.io/badge/React-18.x-blue.svg)
![CSS](https://img.shields.io/badge/Styling-Custom%20CSS-purple.svg)
![API](https://img.shields.io/badge/API-Open--Meteo-green.svg)

## ✨ Features

- 🔍 **City Search** - Search for any city worldwide
- 🌡️ **Real-time Weather** - Get current temperature and conditions
- 💨 **Wind Information** - View wind speed and direction
- 🎨 **Modern UI** - Beautiful gradient design with glassmorphism effects
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Fast Loading** - Optimized performance with loading states
- 🎭 **Weather Icons** - Visual emoji indicators for weather conditions
- ⌨️ **Keyboard Support** - Press Enter to search

## 🚀 Live Demo

[View Live Demo](#) *(https://weather-r7u2tw3vy-tharunraj-us-projects.vercel.app/)*

## 📸 Screenshots

```
[Add screenshots of your app here]
```

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Custom CSS** - No Tailwind, pure CSS styling
- **Open-Meteo API** - Free weather data API
- **Geocoding API** - City coordinates lookup

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles (optional)
├── package.json
└── README.md
```

## 🎯 Usage

1. **Search for a City**
   - Type a city name in the search bar
   - Click "Search" or press Enter

2. **View Weather Information**
   - Current temperature
   - Weather conditions (clear, cloudy, rainy, etc.)
   - Wind speed and direction
   - Last updated timestamp

3. **Error Handling**
   - Invalid city names show error messages
   - Network errors are gracefully handled

## 🌐 API Information

This app uses the following free APIs:

### Open-Meteo Weather API
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Features**: Current weather, temperature, wind speed
- **Rate Limit**: No API key required, free tier available

### Open-Meteo Geocoding API
- **Endpoint**: `https://geocoding-api.open-meteo.com/v1/search`
- **Features**: City name to coordinates conversion
- **Rate Limit**: No API key required, free tier available

**Note**: No API key is required for this application!

## 🎨 Design Features

### Visual Effects
- ✅ Gradient backgrounds with animated shimmer
- ✅ Glassmorphism cards with backdrop blur
- ✅ Smooth hover animations
- ✅ Loading spinner animations
- ✅ Bounce effect on weather icons
- ✅ Fade-in page transitions

### Color Scheme
- **Primary Gradient**: Purple to Pink (#667eea → #764ba2 → #f093fb)
- **Text Colors**: Dark gray scale for readability
- **Accents**: Blue tones for interactive elements

## 🔧 Customization

### Changing Colors

Edit the CSS variables in the component:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);

/* Button gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding More Weather Details

You can extend the weather data by modifying the API call:

```javascript
const weatherRes = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation`
);
```

### Custom Weather Icons

Replace emoji icons with custom images or icon libraries:

```javascript
const getWeatherIcon = (code) => {
  // Replace with your custom icons
  return <img src={`/icons/weather-${code}.svg`} alt="weather" />;
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🐛 Known Issues

- None at the moment! Report issues [here](https://github.com/yourusername/weather-app/issues)

## 🚀 Future Enhancements

- [ ] 7-day forecast
- [ ] Hourly weather updates
- [ ] Weather maps
- [ ] Favorite cities
- [ ] Dark mode toggle
- [ ] Temperature unit toggle (°C/°F)
- [ ] Weather alerts
- [ ] Location detection

