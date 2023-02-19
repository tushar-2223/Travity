/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'heroimage': "url('./images/bg_ill.png')",
        'background': "url('./images/leafbackground2.svg')",
        'bg2': "url('./images/bg2.svg')",
        
        // packahge

        'himalya': "url('https://images.newindianexpress.com/uploads/user/imagelibrary/2022/10/29/w1200X800/himalaya_1.jpg')",
        'delhi': "url('https://static.toiimg.com/photo/msid-92060804,width-96,height-65.cms')",
        'goa': "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1')",
        'assam': "url('https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/assam-tourist-places.jpg')",
        'gujarat': "url('https://w0.peakpx.com/wallpaper/213/422/HD-wallpaper-sardar-patel-statue-of-unity.jpg')",
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
