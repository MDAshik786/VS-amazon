export const handleNavigate = (navigate, value, e) => {
    e?.preventDefault();
    navigate(`/${value}`)
}  
export const moveToCartPage = (navigate, e) => {
    e.preventDefault();
    
    navigate(`/cart/${JSON.parse(localStorage.getItem("datas"))?.email}`);
  };
  export const handleChangePage = (value, product, navigate,e) => {
    e.preventDefault()
    navigate(`/${value}`, { state: { product } });
  };