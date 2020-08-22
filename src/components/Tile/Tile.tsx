import React, { FC, useCallback, useMemo, memo } from 'react';
import * as styles from './styles.scss';
import classNames from 'classnames';
import { Tile } from '~/types';
import { renderIcon, getTileBackground } from '~/utils';
import { TileIconStyles } from '~/styles/styles';

interface Props {
  tile: Tile;
  selectTile: (tile: Tile) => void;
}

const Tile: FC<Props> = memo(({
  tile,
  selectTile,
}) => {
  const {
    is_selected,
    is_blocked,
    coordinates,
    icon,
    special_styles,
  } = tile;

  const handleTileClick = useCallback(() => {
    if (is_selected || is_blocked) {
      return null;
    }

    selectTile(tile);
  }, [selectTile, tile]);

  const tileBackgroundColor = useMemo(() => {
    if (!tile) {
      return null;
    }

    return getTileBackground(coordinates.layer);
  }, [tile]);

  const tileStyles = useMemo(() => {
    if (!tile) {
      return null;
    }

    const main_styles = {
      gridColumn: `${coordinates.col + 1}`,
      gridRow: `${coordinates.row + 1}`,
      backgroundColor: tileBackgroundColor,
    };

    const optional_styles = special_styles || {};

    return {
      ...main_styles,
      ...optional_styles,
    };
  }, [tile]);

  return (
    <div
      style={tileStyles}
      className={
        classNames(styles.container, {
          [styles.is_selected]: is_selected,
          [styles.is_blocked]: is_blocked,
        })
      }
      onClick={handleTileClick}
      data-testid="tile"
    >
      <span className={styles.layer_badge}>
        {coordinates.layer}
      </span>
      {React.createElement(renderIcon(icon), TileIconStyles)}
    </div>
  );
});

export { Tile };
