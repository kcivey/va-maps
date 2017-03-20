## Setup for development ##

Download shapefiles from https://www.census.gov/geo/maps-data/data/cbf/cbf_sld.html

    wget http://www2.census.gov/geo/tiger/GENZ2015/shp/cb_2015_51_sldu_500k.zip
    unzip cb_2015_51_sldu_500k.zip
    wget http://www2.census.gov/geo/tiger/GENZ2015/shp/cb_2015_51_sldl_500k.zip
    unzip cb_2015_51_sldl_500k.zip
    wget http://www2.census.gov/geo/tiger/GENZ2015/shp/cb_2015_us_county_500k.zip
    unzip cb_2015_us_county_500k.zip
    wget http://www2.census.gov/geo/tiger/GENZ2015/shp/cb_2015_us_cd114_500k.zip
    unzip cb_2015_us_cd114_500k.zip

Convert to GeoJSON:

    sudo apt install gdal
    ogr2ogr -F GeoJSON -t_srs crs:84 va-senate-districts.geo.json cb_2015_51_sldu_500k.shp
    ogr2ogr -F GeoJSON -t_srs crs:84 va-hod-districts.geo.json cb_2015_51_sldl_500k.shp
    ogr2ogr -F GeoJSON -t_srs crs:84 us-counties.geo.json cb_2015_us_county_500k.shp
    ogr2ogr -F GeoJSON -t_srs crs:84 us-congressional-districts.geo.json cb_2015_us_cd114_500k.shp

Filter US files to get only VA features:

    ./filter-va.js us-counties.geo.json > va-counties.geo.json
    ./filter-va.js us-congressional-districts.geo.json > va-congressional-districts.geo.json

Convert to TopoJSON:

    ./node_modules/.bin/geo2topo va-hod-districts.geo.json > va-hod-districts.topo.json
    ./node_modules/.bin/geo2topo va-senate-districts.geo.json > va-senate-districts.topo.json
    ./node_modules/.bin/geo2topo va-counties.geo.json > va-counties.topo.json
    ./node_modules/.bin/geo2topo va-congressional-districts.geo.json > va-congressional-districts.topo.json
