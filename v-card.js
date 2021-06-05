class VCard extends HTMLElement {
  constructor() {
    super();

    this.image = "";
  }

  connectedCallback() {
    if(this.getAttribute("image") != this.image){
      this.image = this.getAttribute("image");

      this.render();
    }
  }

  render() {
    this.innerHTML = `
    <div class="my-2 mx-1 text-center">
    <img src="./img/${this.image}" style="height: 110px; width: 115px;"></img>
    <p class="font-italic">${isNaN( this.id ) ? this.id : parseInt( this.id ) + 1}</p>
    ${isNaN( this.id ) ? ("<p><span class=\"font-weight-bold\">Estado: </span>" + ((this.image == "muffin.jpg") ? "Trabajando" : "Dormido") + "</p>") : ""}
    </div>
    `;
  }
}

customElements.define("v-card", VCard);