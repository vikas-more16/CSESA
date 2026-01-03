# CSESA Website Setup Guide

## File Structure
```
csesa2526/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── team/
    └── faculty/
```

## Adding Team Member Photos

1. Place team member photos in the `images/team/` folder
2. Name them according to the format: `firstname-lastname.jpg` (lowercase, hyphenated)
3. Example: `jay-joshi.jpg`, `bhumika-thakare.jpg`

## Adding Faculty Photos

1. Place faculty photos in the `images/faculty/` folder
2. Name them:
   - `dr-somani.jpg`
   - `dr-patil.jpg`
   - `prof-mankar.jpg`

## Updating Social Links

Edit `script.js` and update the LinkedIn and GitHub links in the `teamData` object:

```javascript
{
    name: "Jay Joshi",
    role: "President",
    image: "images/team/jay-joshi.jpg",
    linkedin: "https://linkedin.com/in/jay-joshi", // Update this
    github: "https://github.com/jay-joshi" // Update this
}
```

## Running the Website

Simply open `index.html` in a web browser. No server required for basic functionality.

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Smooth scrolling navigation
- ✅ Event filtering system
- ✅ Interactive animations
- ✅ Modern gradient theme
- ✅ Social media integration ready

## Customization

- Colors: Edit CSS variables in `styles.css` (`:root` section)
- Content: Edit text directly in `index.html`
- Events: Add/modify events in `script.js` (`eventsData` array)
- Team: Add/modify team members in `script.js` (`teamData` object)

