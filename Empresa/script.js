document.addEventListener("DOMContentLoaded", () => {


    /* =========================================================
       CONFIGURACIÓN
    ========================================================= */

    /*
        CAMBIA AQUÍ TU NÚMERO DE WHATSAPP.

        Ejemplo:
        Perú: 51987654321
    */

    const WHATSAPP_NUMBER = "51999999999";


    /* =========================================================
       MENÚ SEMANAL
    =========================================================

       AQUÍ PUEDES CAMBIAR:

       - nombre
       - imagen
       - descripción

       Las imágenes deben estar dentro de la carpeta "img".

       Ejemplo:

       img/lunes/caldo-blanco.jpg

    ========================================================= */


    const menuSemanal = {


        /* =====================================================
           LUNES
        ===================================================== */

        lunes: {

            nombre: "Lunes",

            almuerzo: {

                caldos: [

                    {
                        nombre: "Caldo blanco",
                        imagen: "img/lunes/caldo-blanco.jpg",
                        descripcion: "Caldo casero del día."
                    },

                    {
                        nombre: "Chairo",
                        imagen: "img/lunes/chairo.jpg",
                        descripcion: "Sopa tradicional de sabor casero."
                    }

                ],

                segundos: [

                    {
                        nombre: "Huevo frito con lentejas",
                        imagen: "img/lunes/huevo-frito-lentejas.jpg",
                        descripcion: "Huevo frito acompañado de lentejas."
                    },

                    {
                        nombre: "Pollo asado con lentejas",
                        imagen: "img/lunes/pollo-asado-lentejas.jpg",
                        descripcion: "Pollo asado acompañado de lentejas."
                    },

                    {
                        nombre: "Revuelto de verduras",
                        imagen: "img/lunes/revuelto-verduras.jpg",
                        descripcion: "Verduras preparadas al estilo casero."
                    },

                    {
                        nombre: "Chuleta de res",
                        imagen: "img/lunes/chuleta-res.jpg",
                        descripcion: "Chuleta de res preparada al momento."
                    }

                ]

            },


            cena: {

                sopa: {

                    nombre: "Sopa de sémola",

                    imagen: "img/lunes/sopa-semola.jpg",

                    descripcion: "Sopa casera de sémola."
                },

                segundos: [

                    {
                        nombre: "Chuleta de res",
                        imagen: "img/lunes/cena-chuleta-res.jpg",
                        descripcion: "Chuleta de res."
                    },

                    {
                        nombre: "Pollo al sillao",
                        imagen: "img/lunes/cena-pollo-sillao.jpg",
                        descripcion: "Pollo al sillao."
                    },

                    {
                        nombre: "Cau cau de pancita",
                        imagen: "img/lunes/cena-cau-cau.jpg",
                        descripcion: "Cau cau de pancita."
                    }

                ]

            }

        },


        /* =====================================================
           MARTES
        ===================================================== */

        martes: {

            nombre: "Martes",

            almuerzo: {

                caldos: [

                    {
                        nombre: "Caldo blanco",
                        imagen: "img/martes/caldo-blanco.jpg",
                        descripcion: "Caldo casero del día."
                    },

                    {
                        nombre: "Cazuela",
                        imagen: "img/martes/cazuela.jpg",
                        descripcion: "Cazuela preparada al estilo casero."
                    }

                ],

                segundos: [

                    {
                        nombre: "Saltado de vainita",
                        imagen: "img/martes/saltado-vainita.jpg",
                        descripcion: "Vainitas salteadas."
                    },

                    {
                        nombre: "Estofado de pollo",
                        imagen: "img/martes/estofado-pollo.jpg",
                        descripcion: "Estofado de pollo casero."
                    },

                    {
                        nombre: "Guiso de pallar",
                        imagen: "img/martes/guiso-pallar.jpg",
                        descripcion: "Pallar preparado al estilo casero."
                    },

                    {
                        nombre: "Mondonguito a la italiana",
                        imagen: "img/martes/mondonguito.jpg",
                        descripcion: "Mondonguito preparado al estilo italiano."
                    }

                ]

            },


            cena: {

                sopa: {

                    nombre: "Sopa de casa",

                    imagen: "img/martes/sopa-casa.jpg",

                    descripcion: "Sopa casera del día."
                },

                segundos: [

                    {
                        nombre: "Pollo a la olla",
                        imagen: "img/martes/cena-pollo-olla.jpg",
                        descripcion: "Pollo preparado a la olla."
                    },

                    {
                        nombre: "Saltado de brócoli",
                        imagen: "img/martes/cena-saltado-brocoli.jpg",
                        descripcion: "Brócoli salteado."
                    },

                    {
                        nombre: "Estofado de pollo",
                        imagen: "img/martes/cena-estofado-pollo.jpg",
                        descripcion: "Estofado de pollo."
                    }

                ]

            }

        },


        /* =====================================================
           MIÉRCOLES
        ===================================================== */

        miercoles: {

            nombre: "Miércoles",

            almuerzo: {

                caldos: [

                    {
                        nombre: "Caldo blanco",
                        imagen: "img/miercoles/caldo-blanco.jpg",
                        descripcion: "Caldo casero del día."
                    },

                    {
                        nombre: "Caldo de quinua",
                        imagen: "img/miercoles/caldo-quinua.jpg",
                        descripcion: "Caldo preparado con quinua."
                    }

                ],

                segundos: [

                    {
                        nombre: "Tallarín con pollo",
                        imagen: "img/miercoles/tallarin-pollo.jpg",
                        descripcion: "Tallarines acompañados de pollo."
                    },

                    {
                        nombre: "Chuleta de chancho",
                        imagen: "img/miercoles/chuleta-chancho.jpg",
                        descripcion: "Chuleta de chancho."
                    },

                    {
                        nombre: "Revuelto de brócoli",
                        imagen: "img/miercoles/revuelto-brocoli.jpg",
                        descripcion: "Brócoli preparado al estilo casero."
                    },

                    {
                        nombre: "Estofado de carne",
                        imagen: "img/miercoles/estofado-carne.jpg",
                        descripcion: "Estofado de carne."
                    }

                ]

            },


            cena: {

                sopa: {

                    nombre: "Sopa de casa",

                    imagen: "img/miercoles/sopa-casa.jpg",

                    descripcion: "Sopa casera."
                },

                segundos: [

                    {
                        nombre: "Pollo dorado",
                        imagen: "img/miercoles/cena-pollo-dorado.jpg",
                        descripcion: "Pollo dorado."
                    },

                    {
                        nombre: "Guiso de fideos",
                        imagen: "img/miercoles/cena-guiso-fideos.jpg",
                        descripcion: "Guiso de fideos."
                    },

                    {
                        nombre: "Chuleta de res",
                        imagen: "img/miercoles/cena-chuleta-res.jpg",
                        descripcion: "Chuleta de res."
                    }

                ]

            }

        },


        /* =====================================================
           JUEVES
        ===================================================== */

        jueves: {

            nombre: "Jueves",

            almuerzo: {

                caldos: [

                    {
                        nombre: "Caldo blanco",
                        imagen: "img/jueves/caldo-blanco.jpg",
                        descripcion: "Caldo casero."
                    },

                    {
                        nombre: "Menestrón",
                        imagen: "img/jueves/menestron.jpg",
                        descripcion: "Menestrón casero."
                    }

                ],

                segundos: [

                    {
                        nombre: "Pollo al sillao",
                        imagen: "img/jueves/pollo-sillao.jpg",
                        descripcion: "Pollo al sillao."
                    },

                    {
                        nombre: "Frejolada",
                        imagen: "img/jueves/frejolada.jpg",
                        descripcion: "Frejolada casera."
                    },

                    {
                        nombre: "Chanfainita",
                        imagen: "img/jueves/chanfainita.jpg",
                        descripcion: "Chanfainita."
                    },

                    {
                        nombre: "Chuleta de chancho",
                        imagen: "img/jueves/chuleta-chancho.jpg",
                        descripcion: "Chuleta de chancho."
                    }

                ]

            },


            cena: {

                sopa: {

                    nombre: "Aguadito",

                    imagen: "img/jueves/aguadito.jpg",

                    descripcion: "Aguadito casero."
                },

                segundos: [

                    {
                        nombre: "Pollo broster",
                        imagen: "img/jueves/cena-pollo-broster.jpg",
                        descripcion: "Pollo broster."
                    },

                    {
                        nombre: "Seco de pollo",
                        imagen: "img/jueves/cena-seco-pollo.jpg",
                        descripcion: "Seco de pollo."
                    },

                    {
                        nombre: "Revuelto de verduras",
                        imagen: "img/jueves/cena-revuelto-verduras.jpg",
                        descripcion: "Revuelto de verduras."
                    }

                ]

            }

        },


        /* =====================================================
           VIERNES
        ===================================================== */

        viernes: {

            nombre: "Viernes",

            almuerzo: {

                caldos: [

                    {
                        nombre: "Caldo blanco",
                        imagen: "img/viernes/caldo-blanco.jpg",
                        descripcion: "Caldo casero."
                    },

                    {
                        nombre: "Chupe de viernes",
                        imagen: "img/viernes/chupe-viernes.jpg",
                        descripcion: "Chupe tradicional de viernes."
                    }

                ],

                segundos: [

                    {
                        nombre: "Pescado frito",
                        imagen: "img/viernes/pescado-frito.jpg",
                        descripcion: "Pescado frito."
                    },

                    {
                        nombre: "Cau cau de pancita",
                        imagen: "img/viernes/cau-cau.jpg",
                        descripcion: "Cau cau de pancita."
                    },

                    {
                        nombre: "Pollo al sillao",
                        imagen: "img/viernes/pollo-sillao.jpg",
                        descripcion: "Pollo al sillao."
                    },

                    {
                        nombre: "Chuleta de chancho",
                        imagen: "img/viernes/chuleta-chancho.jpg",
                        descripcion: "Chuleta de chancho."
                    }

                ]

            },


            cena: {

                sopa: {

                    nombre: "Sopa de sémola",

                    imagen: "img/viernes/sopa-semola.jpg",

                    descripcion: "Sopa casera de sémola."
                },

                segundos: [

                    {
                        nombre: "Pollo al sillao",
                        imagen: "img/viernes/cena-pollo-sillao.jpg",
                        descripcion: "Pollo al sillao."
                    },

                    {
                        nombre: "Chuleta de res",
                        imagen: "img/viernes/cena-chuleta-res.jpg",
                        descripcion: "Chuleta de res."
                    },

                    {
                        nombre: "Seco de res",
                        imagen: "img/viernes/cena-seco-res.jpg",
                        descripcion: "Seco de res."
                    }

                ]

            }

        },


        /* =====================================================
           SÁBADO
        ===================================================== */

        sabado: {

            nombre: "Sábado",

            almuerzo: {

                caldos: [

                    {
                        nombre: "Caldo blanco",
                        imagen: "img/sabado/caldo-blanco.jpg",
                        descripcion: "Caldo casero."
                    },

                    {
                        nombre: "Caldo de pollo",
                        imagen: "img/sabado/caldo-pollo.jpg",
                        descripcion: "Caldo de pollo casero."
                    }

                ],

                segundos: [

                    {
                        nombre: "Ají de gallina",
                        imagen: "img/sabado/aji-gallina.jpg",
                        descripcion: "Ají de gallina."
                    },

                    {
                        nombre: "Lomo saltado",
                        imagen: "img/sabado/lomo-saltado.jpg",
                        descripcion: "Lomo saltado."
                    },

                    {
                        nombre: "Arroz con pollo",
                        imagen: "img/sabado/arroz-pollo.jpg",
                        descripcion: "Arroz con pollo."
                    },

                    {
                        nombre: "Chuleta de chancho",
                        imagen: "img/sabado/chuleta-chancho.jpg",
                        descripcion: "Chuleta de chancho."
                    },

                    /*
                        PUEDES AGREGAR MÁS OPCIONES PARA SÁBADO
                    */

                    {
                        nombre: "Pollo a la olla con ensalada rusa",
                        imagen: "img/sabado/pollo-olla-ensalada-rusa.jpg",
                        descripcion: "Pollo a la olla acompañado de ensalada rusa."
                    },

                    {
                        nombre: "Chuleta de res con ensalada rusa",
                        imagen: "img/sabado/chuleta-res-ensalada-rusa.jpg",
                        descripcion: "Chuleta de res con ensalada rusa."
                    },

                    {
                        nombre: "Arroz verde con chuleta de chancho",
                        imagen: "img/sabado/arroz-verde-chuleta.jpg",
                        descripcion: "Arroz verde acompañado de chuleta de chancho."
                    }

                ]

            },


            cena: {

                sopa: {

                    nombre: "Sopa de casa",

                    imagen: "img/sabado/sopa-casa.jpg",

                    descripcion: "Sopa casera."
                },

                segundos: [

                    {
                        nombre: "Pollo broster",
                        imagen: "img/sabado/cena-pollo-broster.jpg",
                        descripcion: "Pollo broster."
                    },

                    {
                        nombre: "Chuleta de res",
                        imagen: "img/sabado/cena-chuleta-res.jpg",
                        descripcion: "Chuleta de res."
                    },

                    {
                        nombre: "Lomo saltado",
                        imagen: "img/sabado/cena-lomo-saltado.jpg",
                        descripcion: "Lomo saltado."
                    }

                ]

            }

        }

    };


    /* =========================================================
       ELEMENTOS DEL DOM
    ========================================================= */

    const dailyMenu = document.getElementById("dailyMenu");

    const dayButtons = document.querySelectorAll(".day-btn");

    const cart = document.getElementById("cart");

    const cartButton = document.getElementById("cartButton");

    const closeCart = document.getElementById("closeCart");

    const overlay = document.getElementById("overlay");

    const cartItems = document.getElementById("cartItems");

    const cartCount = document.getElementById("cartCount");

    const totalElement = document.getElementById("totalElement");

    const orderBtn = document.getElementById("orderBtn");

    const menuBtn = document.getElementById("menuBtn");

    const navLinks = document.getElementById("navLinks");

    const backToTop = document.getElementById("backToTop");


    /* =========================================================
       CARRITO
    ========================================================= */

    let shoppingCart = [];


    function addToCart(name, price, type) {

        const existingItem = shoppingCart.find(
            item =>
                item.name === name &&
                item.type === type
        );


        if (existingItem) {

            existingItem.quantity++;

        } else {

            shoppingCart.push({

                name: name,

                price: price,

                type: type,

                quantity: 1

            });

        }

        renderCart();

        openCart();

    }


    function renderCart() {

        cartItems.innerHTML = "";


        if (shoppingCart.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    Tu carrito está vacío.
                </p>
            `;

            cartCount.textContent = "0";

            totalElement.textContent = "S/ 0";

            return;
        }


        let total = 0;

        let quantity = 0;


        shoppingCart.forEach((item, index) => {

            const subtotal =
                item.price * item.quantity;

            total += subtotal;

            quantity += item.quantity;


            const element =
                document.createElement("div");

            element.className = "cart-item";


            element.innerHTML = `

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <small>
                        ${item.type}
                    </small>

                    <br>

                    <small>
                        ${item.quantity} x S/ ${item.price}
                    </small>

                </div>

                <div>

                    <strong>
                        S/ ${subtotal}
                    </strong>

                    <br>

                    <button
                        class="cart-remove"
                        data-index="${index}">
                        Eliminar
                    </button>

                </div>
            `;


            cartItems.appendChild(element);

        });


        cartCount.textContent = quantity;

        totalElement.textContent =
            `S/ ${total}`;


        document
            .querySelectorAll(".cart-remove")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        shoppingCart.splice(
                            Number(button.dataset.index),
                            1
                        );

                        renderCart();

                    }
                );

            });

    }


    /* =========================================================
       ABRIR / CERRAR CARRITO
    ========================================================= */

    function openCart() {

        cart.classList.add("active");

        overlay.classList.add("active");

    }


    function closeCartFunction() {

        cart.classList.remove("active");

        overlay.classList.remove("active");

    }


    cartButton.addEventListener(
        "click",
        openCart
    );


    closeCart.addEventListener(
        "click",
        closeCartFunction
    );


    overlay.addEventListener(
        "click",
        closeCartFunction
    );


    /* =========================================================
       GENERAR TARJETA DE PLATO
    ========================================================= */

    function createDishCard(dish, price, type) {

        return `

            <article class="dish-card">

                <img
                    src="${dish.imagen}"
                    alt="${dish.nombre}"
                    class="dish-image"
                    onerror="this.src='img/plato-placeholder.jpg'"
                >

                <div class="dish-info">

                    <h4>
                        ${dish.nombre}
                    </h4>

                    <p>
                        ${dish.descripcion}
                    </p>

                    <div class="dish-price">

                        <strong>
                            S/ ${price}
                        </strong>

                        <button
                            class="add-btn"
                            data-name="${dish.nombre}"
                            data-price="${price}"
                            data-type="${type}">
                            + Agregar
                        </button>

                    </div>

                </div>

            </article>

        `;

    }


    /* =========================================================
       MOSTRAR MENÚ DEL DÍA
    ========================================================= */

    function renderDay(day) {

        const menu = menuSemanal[day];


        let html = `

            <div class="daily-title">

                <h3>
                    Menú del ${menu.nombre}
                </h3>

            </div>


            <!-- ALMUERZO -->

            <div class="menu-period">

                <h3 class="period-title">
                    ☀️ Almuerzo
                </h3>

                <h4 style="margin-bottom:20px;">
                    🍲 Caldos
                </h4>

                <div class="dish-grid">
        `;


        menu.almuerzo.caldos.forEach(
            caldo => {

                html += createDishCard(
                    caldo,
                    6,
                    "Solo caldo"
                );

            }
        );


        html += `

                </div>

                <h4 style="margin:35px 0 20px;">
                    🍴 Segundos
                </h4>

                <div class="dish-grid">
        `;


        menu.almuerzo.segundos.forEach(
            segundo => {

                html += createDishCard(
                    segundo,
                    8,
                    "Solo segundo"
                );

            }
        );


        html += `

                </div>

            </div>


            <!-- CENA -->

            <div class="menu-period">

                <h3 class="period-title">
                    🌙 Cena
                </h3>

                <h4 style="margin-bottom:20px;">
                    🍲 Sopa
                </h4>

                <div class="dish-grid">
        `;


        html += createDishCard(
            menu.cena.sopa,
            6,
            "Solo sopa"
        );


        html += `

                </div>

                <h4 style="margin:35px 0 20px;">
                    🍴 Segundos
                </h4>

                <div class="dish-grid">
        `;


        menu.cena.segundos.forEach(
            segundo => {

                html += createDishCard(
                    segundo,
                    8,
                    "Solo segundo"
                );

            }
        );


        html += `

                </div>

            </div>

        `;


        dailyMenu.innerHTML = html;


        /* BOTONES AGREGAR */

        document
            .querySelectorAll(".add-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        addToCart(

                            button.dataset.name,

                            Number(
                                button.dataset.price
                            ),

                            button.dataset.type

                        );

                    }
                );

            });

    }


    /* =========================================================
       CAMBIAR DÍA
    ========================================================= */

    dayButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                dayButtons.forEach(
                    btn =>
                        btn.classList.remove("active")
                );

                button.classList.add("active");

                renderDay(
                    button.dataset.day
                );

            }
        );

    });


    /* MOSTRAR LUNES AL INICIAR */

    renderDay("lunes");


    /* =========================================================
       MENÚ MÓVIL
    ========================================================= */

    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("active");

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        });


    /* =========================================================
       PEDIDO POR WHATSAPP
    ========================================================= */

    orderBtn.addEventListener(
        "click",
        () => {

            if (shoppingCart.length === 0) {

                alert(
                    "Agrega algún producto antes de realizar el pedido."
                );

                return;
            }


            let message =
                "Hola, El Perolito. Quisiera realizar el siguiente pedido:%0A%0A";


            let total = 0;


            shoppingCart.forEach(item => {

                const subtotal =
                    item.price * item.quantity;

                total += subtotal;


                message +=
                    `• ${item.name} - ${item.type} - ${item.quantity} x S/${item.price}%0A`;

            });


            message +=
                `%0A*Total: S/${total}*`;


            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


            window.open(
                url,
                "_blank"
            );

        }
    );


    /* =========================================================
       CARRUSEL
    ========================================================= */

    const slides =
        document.querySelectorAll(".slide");

    const carouselDots =
        document.getElementById("carouselDots");

    const nextSlideButton =
        document.getElementById("nextSlide");

    const prevSlideButton =
        document.getElementById("prevSlide");


    let currentSlide = 0;


    /* CREAR PUNTOS */

    slides.forEach(
        (_, index) => {

            const dot =
                document.createElement("button");

            dot.className =
                "carousel-dot";

            if (index === 0) {

                dot.classList.add("active");

            }


            dot.addEventListener(
                "click",
                () => {

                    showSlide(index);

                }
            );


            carouselDots.appendChild(dot);

        }
    );


    const dots =
        document.querySelectorAll(
            ".carousel-dot"
        );


    function showSlide(index) {

        if (index >= slides.length) {

            currentSlide = 0;

        } else if (index < 0) {

            currentSlide =
                slides.length - 1;

        } else {

            currentSlide = index;

        }


        slides.forEach(
            slide =>
                slide.classList.remove("active")
        );


        dots.forEach(
            dot =>
                dot.classList.remove("active")
        );


        slides[currentSlide]
            .classList.add("active");


        dots[currentSlide]
            .classList.add("active");

    }


    nextSlideButton.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide + 1
            );

        }
    );


    prevSlideButton.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide - 1
            );

        }
    );


    /* CAMBIO AUTOMÁTICO */

    let carouselInterval =
        setInterval(
            () => {

                showSlide(
                    currentSlide + 1
                );

            },
            5000
        );


    /* =========================================================
       VOLVER ARRIBA
    ========================================================= */

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


});