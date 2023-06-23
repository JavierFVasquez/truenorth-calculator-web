import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  balanceAction,
  selectBalance
} from "../../data/redux/reducers/balance.reducer";
import { Chip } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { formatCurrency } from "../../lib/utils/formatCurrency";

const Balance = () => {
  const balanceSelector = useSelector(selectBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(balanceAction());
  }, [dispatch]);

  return (
    <Chip
      color="success"
      label={
        balanceSelector.loading
          ? "Loading..."
          : formatCurrency(balanceSelector.data?.balance ?? 0)
      }
      icon={<AttachMoneyIcon />}
    />
  );
};

export default Balance;
