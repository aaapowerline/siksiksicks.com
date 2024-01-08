const imgRoot = "./assets/merch/";

export const products = [
  {
    name: "MAKE AMERICA SIK AGAIN Trucker Hat",
    img: "hat.png",
    price: 20.0,
    buttonSrc: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="AU8LCRLU8J2ZJ" />
    <input type="hidden" name="currency_code" value="USD" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
  </form>`,
  },
  {
    name: "Sik Sik Sicks Hoodie",
    img: "hoodie.png",
    price: 35.0,
    buttonSrc: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="ZMBBU8PRGHLX6" />
    <table>
      <tr>
        <td>
          <input type="hidden" name="on0" value="Size"/>
          Size
        </td>
      </tr>
      <tr>
        <td>
          <select name="os0">
            <option value="Small">
              Small
            </option>
            <option value="Medium">
              Medium
            </option>
            <option value="Large">
              Large
            </option>
          </select>
        </td>
      </tr>
    </table>
    <input type="hidden" name="currency_code" value="USD" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
  </form>`,
  },
];

// this is a ul
const items = document.querySelector(".items");

for (const p of products) {
  const li = document.createElement("li");
  li.className = "item";
  li.innerHTML = `
  <div>
    <img class="item__image" src="${imgRoot}${p.img}" alt="${p.name}">
    <h3 class="item__name">${p.name}</h3>
    <p class="item__price">$${p.price}</p>
    <div class="item__button-container">
      ${p.buttonSrc}
    </div>
  </div>
    `;

  items.appendChild(li);
}

const viewCartButtonSrc = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="6Q65E92BCZ4BJ" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
</form>`;
