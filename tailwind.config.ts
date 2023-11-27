import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        greenBg:'#E7F5EE',
        customGray:'#F5F5F5',
        "customGray-1":'#F4FBF7' ,
        "customGray-2":'#B0B3B1',
        "customGray-3":"#4E6269",
        "customGray-4":"#676364",
        'customGray-5':"#475467",
        'customGray-6':'#9CA0AC',
        dark:'#1A1A1A',
        "dark-1":"#131D30",
        "dark-2":"#090909",
        specialBorder:'#CAC8C8',
        primaryYellow:'#FFCE44',
        lightYellow:'#FFF6DB',
        faintGreen:'#FAFFFC',
        "faintGreen-1":"#CCFAE4",
        faintYellow:"#FFFCF5",
        secondary:'#1E1147',
        primaryGreen: '#0F9D58',
        "green-1" : "#1C734A",
        "green-2" : "#DBF0E6",
        "green-3" : "#28A669",
        maroon:'#312B2D',
        milk: '#FFFEFA',
        milkBrown: '#FFF6DB'
      },
      backgroundImage: {
        "hero-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-bg.png')",
        "hero-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-bg-mob.png')",
        "about-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/about-bg.png')",
        "about-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/about-bg-mob.png')",
        "services-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/services-bg.png')",
        "services-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/excellence.png')",
        "contact-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/contact-bg.png')",
        "contact-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/contact-bg-mob.png')",
        "blog-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/blog-bg.png')",
        "ebooks-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/ebooks-bg.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
