import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const plats = [
  'Brogatan',
  'Campus 1', 'Campus 2',
  'Furutorpsplatsen 1', 'Furutorpsplatsen 2', 'Furutorpsplatsen 3',
  'Gröningen 1', 'Gröningen 2', 'Gröningen 3', 'Gröningen 4', 'Gröningen 5', 'Gustav Aldofs kyrka 1', 'Gustav Aldofs kyrka 2', 'Gustav Aldofs kyrka 3',
  'Henry Dunkers plats 1', 'Henry Dunkers plats 2', 'Henry Dunkers plats 3',
  'Idrottens Hus 1', 'Idrottens Hus 2',
  'Järnvägsgatan',
  'Kajpromenaden 1', 'Kajpromenaden 2', 'Kallis 1', 'Kallis 2', 'Kungstorget 1', 'Kungstorget 2',
  'Mäster Palms plats',
  'Parapeten/Kvickbron 1', 'Parapeten/Kvickbron 1',
  'Slottshagen', 'Stadsparken', 'Strandpromenaden 1', 'Strandpromenaden 2', 'Strandpromenaden 3', 'Sundstorget 1', 'Sundstorget 2', 'Sundstorget 3', 'Sundstorget 4', 'Sundstorget 5',
  'Tropical Beach 1', 'Tropical Beach 2', 'Trädsgårdsgatan',
];

const styles = {
  Search:{
    justifyContent: 'space-around',
    top: 20,
    left: 200,
  },
};

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};



/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
const Searchfunction = () => (
  <div>
        <AutoComplete style={styles.Search}
          hintText="Sök platser..."
          dataSource={plats}
          menuProps={menuProps}
        />
      </div>
);

export default Searchfunction;
