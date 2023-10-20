export const handleNavigate = (navigate, value, e) => {
    e?.preventDefault();
    navigate(`/${value}`)
}  