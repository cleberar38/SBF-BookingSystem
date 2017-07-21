import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/1/attachments/99',
    title: 'Kungstorget',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/2/attachments/141',
    title: 'Henry Dunkers plats',
    author: 'pashminu',
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/3/attachments/143',
    title: 'Henry Dunkers plats',
    author: 'Danson67',
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/4/attachments/121',
    title: 'Kajpromenaden',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/4/attachments/121',
    title: 'Kajpromenaden',
    author: 'Hans',
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/6/attachments/101',
    title: 'Kallis',
    author: 'fancycravel',
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/7/attachments/125',
    title: 'Trädgårdsgatan (går inte att boka från maj 2017)',
    author: 'jill112',
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/8/attachments/127',
    title: 'Campus',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://services.arcgis.com/sH96KgSw0uy6vpvJ/arcgis/rest/services/Streetfood_Helsingborg/FeatureServer/0/9/attachments/129',
    title: 'Campus',
    author: 'BkrmadtyaKarki1',
  },
  
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const PlacesGrid = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PlacesGrid;