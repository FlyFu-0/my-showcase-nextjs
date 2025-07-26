const products = [
    {
        brand: 'Nike',
        models: [
            {
                name: 'Zoom Vomero 5',
                description: 'The Vomero 5 takes early 2000s running to modern heights. A combination of breathable and durable materials stands ready for the rigors of your day, while Zoom Air cushioning delivers a smooth ride.',
                price: '170',
                currency: 'USD',
                images: [
                    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/lkwfba88t6qix4qxaavi/NIKE+ZOOM+VOMERO+5.png'
                ]
            },
            {
                name: 'Dunk Low Retro',
                description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
                price: '120',
                currency: 'USD',
                images: [
                    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png'
                ]
            },
            {
                name: "Air Force 1 '07",
                description: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. A subtle platform gives you just the right amount of height.',
                price: '115',
                currency: 'USD',
                images: [
                    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/WMNS+AIR+FORCE+1+%2707.png'
                ]
            },
            {
                name: "P-6000",
                description: "A mash-up of Pegasus' past, the Nike P-6000 features breathable mesh with horizontal and vertical overlays for a 2000s running look that is as striking as, say, a majestic winged horse. Drawing on the design of the Nike Pegasus 25 and 2006, its running aesthetic meets all-day comfort for the streets.",
                price: '115',
                currency: 'USD',
                images: [
                    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99b43d0c-0437-462b-a64c-7377c00b4e30/W+NIKE+P-6000.png'
                ]
            },
            {
                name: "Dunk Low",
                description: "Designed for basketball but adopted by skaters, the Nike Dunk Low helped define sneaker culture. Now this mid-'80s icon is an easy score for your closet. With ankle padding and durable rubber traction, these are a slam dunk whether you're learning to skate or getting ready for school.",
                price: '90',
                currency: 'USD',
                images: [
                    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b60016b-9fc6-4deb-9aa5-479d2c3df849/NIKE+DUNK+LOW+%28GS%29.png'
                ]
            },
            {
                name: "Jordan Spizike Low",
                description: "The Spizike takes elements of five classic Jordans, combines them, and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great looking pair of kicks with some history. What more can you ask for? Ya dig?",
                price: '165',
                currency: 'USD',
                images: [
                    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f94f55bc-3cb6-4978-a150-59ce7eff155b/JORDAN+SPIZIKE+LOW.png',
                ]
            },
        ]
    },
    {
        brand: 'New Balance',
        models: [
            {
                name: '9060',
                description: 'The Vomero 5 takes early 2000s running to modern heights. A combination of breathable and durable materials stands ready for the rigors of your day, while Zoom Air cushioning delivers a smooth ride.',
                price: '150',
                currency: 'USD',
                images: [
                    'https://nb.scene7.com/is/image/NB/u9060aub_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880'
                ]
            },
            {
                name: 'Tyrese Maxey x 1906R',
                description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
                price: '160',
                currency: 'USD',
                images: [
                    'https://nb.scene7.com/is/image/NB/u1906rtm_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880'
                ]
            },
            {
                name: "Tyrese Maxey x Hesi Low v2",
                description: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. A subtle platform gives you just the right amount of height.',
                price: '120',
                currency: 'USD',
                images: [
                    'https://nb.scene7.com/is/image/NB/bbhslmm2_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880'
                ]
            },
            {
                name: "740 BUNGEE LACE",
                description: "A mash-up of Pegasus' past, the Nike P-6000 features breathable mesh with horizontal and vertical overlays for a 2000s running look that is as striking as, say, a majestic winged horse. Drawing on the design of the Nike Pegasus 25 and 2006, its running aesthetic meets all-day comfort for the streets.",
                price: '80',
                currency: 'USD',
                images: [
                    'https://nb.scene7.com/is/image/NB/pz740bo_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880'
                ]
            },
            {
                name: "480",
                description: "Designed for basketball but adopted by skaters, the Nike Dunk Low helped define sneaker culture. Now this mid-'80s icon is an easy score for your closet. With ankle padding and durable rubber traction, these are a slam dunk whether you're learning to skate or getting ready for school.",
                price: '90',
                currency: 'USD',
                images: [
                    'https://nb.scene7.com/is/image/NB/bb480pen_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880'
                ]
            },
            {
                name: "327",
                description: "The Spizike takes elements of five classic Jordans, combines them, and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great looking pair of kicks with some history. What more can you ask for? Ya dig?",
                price: '165',
                currency: 'USD',
                images: [
                    'https://nb.scene7.com/is/image/NB/ws327lca_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',
                ]
            },
        ]
    }
];

export default products;