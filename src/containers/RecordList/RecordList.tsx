import { useDispatch, useSelector } from "react-redux";
import RecordTable from "../../components/RecordTable/RecordTable";
import { useEffect } from "react";
import {
  fetchRecordList,
  fetchRecordListNextPage,
  selectRecord
} from "../../data/redux/reducers/record.reducer";
import {
  deleteRecord,
  selectDeleteRecord
} from "../../data/redux/reducers/delete-record.reducer";

const RecordList = () => {
  const dispatch = useDispatch();
  const record = useSelector(selectRecord);
  const deletedRecordSelector = useSelector(selectDeleteRecord);

  useEffect(() => {
    dispatch(fetchRecordList());
  }, [dispatch]);

  const handleOnDeleteRecord = (id: string) => {
    dispatch(deleteRecord({ id }));
  };

  const handleNextPage = () => {
    dispatch(fetchRecordListNextPage());
  };

  return (
    <RecordTable
      data={record.data as any}
      loading={record.loading}
      onNextPage={handleNextPage}
      onDeleteRecord={handleOnDeleteRecord}
      recordDeletingIdLoading={deletedRecordSelector.idLoading}
    />
  );
};

export default RecordList;
