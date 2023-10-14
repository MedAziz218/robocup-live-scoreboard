import * as lodash from 'lodash';
import * as React from 'react';
import { Space } from 'react-zoomable-ui';
import Tournament from '../../components/Tournament';
const colorFor = (i) => {
  switch (i % 4) {
    case 0:
      return '#440023';
    case 1:
      return '#F0A932';
    case 2:
      return '#39AA99';
    case 3:
      return '#839FFF';
  }
};

export const TournamentPage = () => {
  return (
    <Space style={{ backgroundColor: '#1d1c18' }} innerDivStyle={{ width: 10000 }}>
     
        <div key={`row`} style={{ display: 'flex', flexDirection: 'row' }}>
          <Tournament/>
          
        </div>
     
    </Space>
  );
};

