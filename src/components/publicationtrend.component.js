import React from 'react';
import { constant, range, times } from 'lodash';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

require('highcharts/modules/exporting')(Highcharts);

const PublicationTrend = ({ publications }) => {
  const getTotalPublicationByYear = (publicationType) => {
    const filteredPublications = publications.filter(
      (p) => p.publicationType === publicationType
    );
    const timeRange = range(2011, 2022);
    const totalPublicationsByYear = times(timeRange.length, constant(0));

    filteredPublications.forEach((publication) => {
      const publicationYear = new Date(publication.creationDate).getFullYear();
      const index = timeRange.indexOf(publicationYear);
      totalPublicationsByYear[index] += 1;
    });

    return totalPublicationsByYear;
  };

  const getCategoryData = () =>
    [
      'Books & Book Chapters',
      'Consultant Report',
      'Cost Recovery (CR) report',
      'Journal',
      'Other Publication',
      'Poster',
      'Presentation',
      'Conference Proceedings',
      'Internal technical report',
    ].map((category) => ({
      name: category,
      data: getTotalPublicationByYear(category),
    }));

  const generateOptions = () => {
    return {
      credits: {
        enabled: false,
      },
      exporting: { enabled: true },
      title: {
        text: 'Publications',
      },
      subtitle: {
        text: 'Source: Natural Resources Canada (NRCan)',
      },
      yAxis: {
        title: {
          text: 'Total',
        },
      },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2011 to 2021',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2011,
        },
      },
      series: getCategoryData(),
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={generateOptions()} />
  );
};

export default PublicationTrend;
