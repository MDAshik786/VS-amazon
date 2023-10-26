import { ACTION } from "../../MainContext/Reducer__/FormReducer";

export const buttonLoading = (dispatch) => {
  dispatch({
    type: ACTION.BUTTONVISIBILITY,
    payload: { value: true },
  });
};
export const handleKeys = (e,searchInput,getAllData, dispatch  ) => {
  if (e.key === "Enter") {
      const input = searchInput?.toLowerCase();
    const filterData =
     searchInput?.length !== 0 &&
     getAllData.filter((product, index) => {
        console.log(input,"input")
        const arr = product.keywords.filter((obj) =>
          obj?.keyword.includes(input)
        );
        return arr.length !== 0 || product.name.includes(input);
      });
    const AllData =
      searchInput.length !== 0
        ? filterData
        : getAllData;
    console.log(AllData,"ALLData");
    dispatch({
        type:ACTION.GETDATA,
        payload:{data:AllData}
    })
  }

};
