 var templatee = `
  <form action="https://sheetdb.io/api/v1/isxdi3oi5zlsr" method="POST" id="sheetdb-form">
  <div class="checkout-groups"><h2 class="checkout-heading">Customer Information</h2> <div class="form-group is-required"> <input type="text"  name="data[name]" placeholder="First name"> <!----></div> <!----><div class="form-group is-required"><input type="text" name="data[phone]" placeholder="Last name"> <!----></div> <!----><div class="form-group is-required"><label class="form-label"></label> <input type="text" name="data[date]" placeholder="Phone or email"> <!----></div> <div class="product-section form-group add-to-cart-section" style="
    width: 100%;
"> <button type="submit" data-pb-field="button-text" data-pb-type="text" data-pb-value="Add to cart" class="button single-submit" style="
     width: 100%;
    display: block;
">
    Add to cart
  </button></div> <!----> <!----> <!----> <!----></div>
  </form>
  `;
  document.querySelectorAll('.add-to-cart-section')[0].innerHTML= templatee;
  
</script>
<script>
       
        var form = document.getElementById('sheetdb-form');

        form.addEventListener("submit", e => {
            e.preventDefault();

          

            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            }).then(
                response => response.json()
            ).then((html) => {
              console.log('k,kjk')
            });
        });
