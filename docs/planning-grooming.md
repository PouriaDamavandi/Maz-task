Project Has 3 parts : ["Landing page (empty should just navigated to product-list page)", "Product List Page" , "Product Unique Page"]

3 device size : 1440 and more, 1028 , 360

Layout has 3 section = ['Header' , 'Body' , 'Footer']

Header has 2 section = ['call to action on left side' , 'navigation list']

Footer has 2 section = ['route and social media access with white background' , 'copy right and licenses and social media section with grey-ish background' ]

Font = Iran.Yekan

Colors = {
text-color : [rgba(10, 42, 81, 1), rgba(226, 0, 84, 1) , rgba(52, 68, 86, 1) ,rgba(100, 126, 154, 1), rgba(52, 68, 86, 1) , rgba(100, 126, 154, 1), rgba(255, 255, 255, 1) , rgba(37, 51, 67, 1), rgba(68, 90, 116, 1), rgba(37, 51, 67, 1) , rgba(37, 51, 67, 1), rgba(68, 90, 116, 1), rgba(87, 114, 142, 1) , rgba(48, 68, 91, 1) , rgba(103, 131, 160, 1) ]
button-colors : [rgba(226, 0, 84, 1), rgba(20, 25, 40, 1) , rgba(252, 229, 238, 1), rgba(233, 237, 245, 1)]

background-colors: [rgba(255, 255, 255, 1) , rgba(233, 237, 245, 1) , rgba(248, 249, 252, 1) ]

}

for icons we should use vuesax looks like and we might have some custom icons as well

Layout padding for whole page is :

Desktop : p-x-164px , p-y-40px(for header) p-t-24px p-b-46px for body, footer should be customized inside the seperated components
Tablet : p-x-80px , p-y-40px(for header) p-t-24px p-b-36px for body, footer should be customized inside the seperated components
Mobile : p-x-16px , p-y-16(for header) p-t-26px p-b-36px for body, footer should be customized inside the seperated components

on Moble layout we have hamburger menu, button with icons are outlined instead of filled color, there is no ui for hamburger menu, footer also has some changes which should be handled inside its own component

Also Navigations Menu icon has a little red dot like bottom of it, and would be great if we add some hover effect or neccessary details to everything else

Product List Page:
Product List Page = has only desktop and tablet size device, 2 main section , sidebar and content list

Product List Tablet is almost identical to desktop size but product list cards are smaller in width, for mobile there is no ui available atm

SideBar has 3 section box in flex column and they can minimize and maximize with arrow icon , including Search and Filter input and search button red color

sorting section with 4 radio buttons,

catagories section with 3 catagory select input showing the amount in front of it

on this side we need reusable com ponents and seperation of concerns and data must be past from outside

on Content list we have 2 columns on it shows what are the filters which were selected

down of the selected filters and search section we have products list in 3 columns with product cards

product card has image , product title and button for view details it should be a reusable component

Product Unique Page :

it has only one column a breadcrumb that shows where we are

one section with profile title and image(image has a zoom functionality (R&D))

another section is product technial details which includes 2 columns with price and price amount , descriptions and descriptions text , catagory and category text , rank and rank test , amount and amount text with seperated gray like background
