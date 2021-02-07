import React, { FC, useMemo } from 'react';
import Tile from '../Tile';
import { Row as RowType } from '~/types';
import useActions from '~/hooks/useActions';
import { selectTile as selectTileActionCreator } from '~/redux/selected-tiles/slice';

interface Props {
  row: RowType;
}

export const Row: FC<Props> = ({ row }) => {
  const tileList = useMemo(() => {
    return Object.keys(row);
  }, [row]);

  const selectTile = useActions(selectTileActionCreator, null);

  return (
    <>
      {tileList.map((r, index) => {
        if (!row[+r]) {
          return null;
        }

        return <Tile key={index} tile={row[+r]} selectTile={selectTile} />;
      })}
    </>
  );
};
