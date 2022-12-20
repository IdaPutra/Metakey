import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../style.css';
import { ResponsiveBar } from '@nivo/bar'



function Histogram() {

    type dataType={
        edition:string,
        distribution:number,
    }[];

    type uniqeType ={
        edition:string,
        distribution:number,
    }[];


    const [unique_data,setUnique_data]= useState <uniqeType> ([{
        edition:"",
        distribution:0,
    }])
    const [data, setData] = useState<dataType>([])
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    
    const fetch_unique = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:3003/distribution');
          setUnique_data(response.data);
        } catch (error) {
            setError(new Error('An error occurred'));
        } finally {
          setLoading(false);
        }
      }


 

      const change_data = () => {
        if (unique_data.length === 0) {
          setData([]);
          return;
        }
      
        const transformedData = unique_data.map((temp) => {
            return {
                edition: temp.edition,
                distribution: temp.distribution,
            };
          });
      
          setData(transformedData);
      }

      useEffect(() => {
    
        fetch_unique();
      }, []);


      useEffect(() => {
    
        change_data();
      }, [unique_data]);

 
console.log(data)





      


    
     
  return (
    <div className='Histogram'>


 
    <p className="card-title"><b>Distribution % Of Each Key</b></p>

    <div className='card'>
    <ResponsiveBar
        data={data}
        keys={['distribution']}
        indexBy="edition"
        margin={{ top: 50, right: 130, bottom: 50, left: 190 }}
        padding={0}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set2' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Edition',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Value',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
 
        role="application"
        ariaLabel="Nivo bar chart "
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in Edition: "+e.indexValue}}
    />
    </div>





</div>

   

    
  );
}

export default Histogram;

