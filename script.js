
const navigation = document.querySelector('nav');
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");

// const enrollButtons = document.querySelectorAll(".Enroll");
// enrollButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         createPopupForm();
//     });
// });

document.querySelector(".Enroll1").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    let background = document.createElement("div")
    background.classList.add("background")
    let card = document.createElement("div")
    card.classList.add("card")
    
    let Title = document.createElement("div")
    Title.classList.add("title")
    let h2 = document.createElement("h2")
    h2.innerText = "Registration"
    let p = document.createElement("p")
    p.innerText = "Registering in Power System Components Course ⚙️"
    let Form = document.createElement("form")
    let inp1 = document.createElement("input")
    inp1.placeholder = "Full Name"
    inp1.id = "name"
    let frame = document.createElement("div")
    frame.classList.add("frame")
    let inp2 = document.createElement("input")
    inp2.placeholder = "Age"
    inp2.id = "age"
    inp2.type = "number"
    inp2.addEventListener("input", () => {
        if (inp2.value.length > 2) {
            inp2.value = inp2.value.slice(0, 2);
        }
    });
    let inp3 = document.createElement("input")
    inp3.placeholder = "Graduation Year"
    inp3.id = "graduation-year"
    inp3.type = "number"
    inp3.addEventListener("input", () => {
        if (inp3.value.length > 4) {
            inp3.value = inp3.value.slice(0, 4);
        }
    });
    let inp4 = document.createElement("input")
    inp4.placeholder = "Specialization"
    inp4.id = "specialization"
    let inp5 = document.createElement("input")
    inp5.placeholder = "Job"
    inp5.id = "job"
    
    let btns = document.createElement("div")
    btns.classList.add("btns")
    let send = document.createElement("button")
    send.innerText = "send"
    send.addEventListener("click", (e) => {
        if (!inp1.value || !inp2.value || !inp3.value || !inp4.value || !inp5.value) {
            e.preventDefault();
            if (!inp1.value) inp1.style.borderColor = "red";
            else inp1.style.borderColor = "#ccc";
            if (!inp2.value) inp2.style.borderColor = "red";
            else inp2.style.borderColor = "#ccc";
            if (!inp3.value) inp3.style.borderColor = "red";
            else inp3.style.borderColor = "#ccc";
            if (!inp4.value) inp4.style.borderColor = "red";
            else inp4.style.borderColor = "#ccc";
            if (!inp5.value) inp5.style.borderColor = "red";
            else inp5.style.borderColor = "#ccc";
            return;
        }
        e.preventDefault()
        whatsapp();
        document.body.removeChild(background)
        document.body.style.overflow = "auto";
    })
    let cancel = document.createElement("button")
    cancel.innerText = "cancel"
    cancel.addEventListener("click", (e) => {
        e.preventDefault()
        document.body.removeChild(background)
        document.body.style.overflow = "auto";
    })

    function whatsapp() {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let graduationYear = document.getElementById("graduation-year").value;
        let specialization = document.getElementById("specialization").value;
        let job = document.getElementById("job").value;
        let message = `Enrolling in Power System Components Course ⚙️\nName: ${name}\nAge: ${age}\nGraduation Year: ${graduationYear}\nSpecialization: ${specialization}\nJob: ${job}`;
        window.open(`https://api.whatsapp.com/send?phone=+201274087211&text=${encodeURIComponent(message)}`);
    }
    
    Title.appendChild(h2)
    Title.appendChild(p)
    Form.appendChild(inp1)
    Form.appendChild(frame)
    Form.appendChild(inp4)
    Form.appendChild(inp5)
    frame.appendChild(inp2)
    frame.appendChild(inp3)
    btns.appendChild(cancel)
    btns.appendChild(send)
    card.appendChild(Title)
    card.appendChild(Form)
    card.appendChild(btns)
    background.appendChild(card)
    document.body.appendChild(background)
})

document.querySelector(".Enroll2").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    let background = document.createElement("div")
    background.classList.add("background")
    let card = document.createElement("div")
    card.classList.add("card")
    
    let Title = document.createElement("div")
    Title.classList.add("title")
    let h2 = document.createElement("h2")
    h2.innerText = "Registration"
    let p = document.createElement("p")
    p.innerText = "Registering in Medium Voltage Components Course ⚡"
    let Form = document.createElement("form")
    let inp1 = document.createElement("input")
    inp1.placeholder = "Full Name"
    inp1.id = "name"
    let frame = document.createElement("div")
    frame.classList.add("frame")
    let inp2 = document.createElement("input")
    inp2.placeholder = "Age"
    inp2.id = "age"
    inp2.type = "number"
    inp2.addEventListener("input", () => {
        if (inp2.value.length > 2) {
            inp2.value = inp2.value.slice(0, 2);
        }
    });
    let inp3 = document.createElement("input")
    inp3.placeholder = "Graduation Year"
    inp3.id = "graduation-year"
    inp3.type = "number"
    inp3.addEventListener("input", () => {
        if (inp3.value.length > 4) {
            inp3.value = inp3.value.slice(0, 4);
        }
    });
    let inp4 = document.createElement("input")
    inp4.placeholder = "Specialization"
    inp4.id = "specialization"
    let inp5 = document.createElement("input")
    inp5.placeholder = "Job"
    inp5.id = "job"
    
    let btns = document.createElement("div")
    btns.classList.add("btns")
    let send = document.createElement("button")
    send.innerText = "send"
    send.addEventListener("click", (e) => {
        if (!inp1.value || !inp2.value || !inp3.value || !inp4.value || !inp5.value) {
            e.preventDefault();
            if (!inp1.value) inp1.style.borderColor = "red";
            else inp1.style.borderColor = "#ccc";
            if (!inp2.value) inp2.style.borderColor = "red";
            else inp2.style.borderColor = "#ccc";
            if (!inp3.value) inp3.style.borderColor = "red";
            else inp3.style.borderColor = "#ccc";
            if (!inp4.value) inp4.style.borderColor = "red";
            else inp4.style.borderColor = "#ccc";
            if (!inp5.value) inp5.style.borderColor = "red";
            else inp5.style.borderColor = "#ccc";
            return;
        }
        e.preventDefault()
        whatsapp();
        document.body.removeChild(background)
        document.body.style.overflow = "auto";
    })
    let cancel = document.createElement("button")
    cancel.innerText = "cancel"
    cancel.addEventListener("click", (e) => {
        e.preventDefault()
        document.body.removeChild(background)
        document.body.style.overflow = "auto";
    })

    function whatsapp() {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let graduationYear = document.getElementById("graduation-year").value;
        let specialization = document.getElementById("specialization").value;
        let job = document.getElementById("job").value;
        let message = `Enrolling in Medium Voltage Components Course ⚡\nName: ${name}\nAge: ${age}\nGraduation Year: ${graduationYear}\nSpecialization: ${specialization}\nJob: ${job}`;
        window.open(`https://api.whatsapp.com/send?phone=+201274087211&text=${encodeURIComponent(message)}`);
    }
    
    Title.appendChild(h2)
    Title.appendChild(p)
    Form.appendChild(inp1)
    Form.appendChild(frame)
    Form.appendChild(inp4)
    Form.appendChild(inp5)
    frame.appendChild(inp2)
    frame.appendChild(inp3)
    btns.appendChild(cancel)
    btns.appendChild(send)
    card.appendChild(Title)
    card.appendChild(Form)
    card.appendChild(btns)
    background.appendChild(card)
    document.body.appendChild(background)
})

document.querySelector(".Enroll3").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    let background = document.createElement("div")
    background.classList.add("background")
    let card = document.createElement("div")
    card.classList.add("card")
    
    let Title = document.createElement("div")
    Title.classList.add("title")
    let h2 = document.createElement("h2")
    h2.innerText = "Registration"
    let p = document.createElement("p")
    p.innerText = "Registering in Advanced Medium Voltage Course 💡"
    let Form = document.createElement("form")
    let inp1 = document.createElement("input")
    inp1.placeholder = "Full Name"
    inp1.id = "name"
    let frame = document.createElement("div")
    frame.classList.add("frame")
    let inp2 = document.createElement("input")
    inp2.placeholder = "Age"
    inp2.id = "age"
    inp2.type = "number"
    inp2.addEventListener("input", () => {
        if (inp2.value.length > 2) {
            inp2.value = inp2.value.slice(0, 2);
        }
    });
    let inp3 = document.createElement("input")
    inp3.placeholder = "Graduation Year"
    inp3.id = "graduation-year"
    inp3.type = "number"
    inp3.addEventListener("input", () => {
        if (inp3.value.length > 4) {
            inp3.value = inp3.value.slice(0, 4);
        }
    });
    let inp4 = document.createElement("input")
    inp4.placeholder = "Specialization"
    inp4.id = "specialization"
    let inp5 = document.createElement("input")
    inp5.placeholder = "Job"
    inp5.id = "job"
    
    let btns = document.createElement("div")
    btns.classList.add("btns")
    let send = document.createElement("button")
    send.innerText = "send"
    send.addEventListener("click", (e) => {
        if (!inp1.value || !inp2.value || !inp3.value || !inp4.value || !inp5.value) {
            e.preventDefault();
            if (!inp1.value) inp1.style.borderColor = "red";
            else inp1.style.borderColor = "#ccc";
            if (!inp2.value) inp2.style.borderColor = "red";
            else inp2.style.borderColor = "#ccc";
            if (!inp3.value) inp3.style.borderColor = "red";
            else inp3.style.borderColor = "#ccc";
            if (!inp4.value) inp4.style.borderColor = "red";
            else inp4.style.borderColor = "#ccc";
            if (!inp5.value) inp5.style.borderColor = "red";
            else inp5.style.borderColor = "#ccc";
            return;
        }
        e.preventDefault()
        whatsapp();
        document.body.removeChild(background)
        document.body.style.overflow = "auto";
    })
    let cancel = document.createElement("button")
    cancel.innerText = "cancel"
    cancel.addEventListener("click", (e) => {
        e.preventDefault()
        document.body.removeChild(background)
        document.body.style.overflow = "auto";
    })

    function whatsapp() {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let graduationYear = document.getElementById("graduation-year").value;
        let specialization = document.getElementById("specialization").value;
        let job = document.getElementById("job").value;
        let message = `Enrolling in Advanced Medium Voltage Course 💡\nName: ${name}\nAge: ${age}\nGraduation Year: ${graduationYear}\nSpecialization: ${specialization}\nJob: ${job}`;
        window.open(`https://api.whatsapp.com/send?phone=+201274087211&text=${encodeURIComponent(message)}`);
    }
    
    Title.appendChild(h2)
    Title.appendChild(p)
    Form.appendChild(inp1)
    Form.appendChild(frame)
    Form.appendChild(inp4)
    Form.appendChild(inp5)
    frame.appendChild(inp2)
    frame.appendChild(inp3)
    btns.appendChild(cancel)
    btns.appendChild(send)
    card.appendChild(Title)
    card.appendChild(Form)
    card.appendChild(btns)
    background.appendChild(card)
    document.body.appendChild(background)
})
