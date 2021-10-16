import React, {useState} from 'react';

export const useRefreshControl = (
  isFetching: boolean,
  updateData: () => void,
) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateData();
    if (!isFetching) {
      setRefreshing(false);
    }
  }, [isFetching, updateData]);

  return {refreshing, onRefresh};
};
