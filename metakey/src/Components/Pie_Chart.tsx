import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../style.css';  
import { ResponsivePie } from '@nivo/pie'

function Pie_Chart() {

    type dataType={
        id:string,
        label:string,
        value:number,
        color:string
    }[];

    type uniqeType ={
        id:number,
        unique_edition:number,
        edition:string,
        percentage:number
    }[];


    const [unique_data,setUnique_data]= useState <uniqeType> ([{
        id:0,
        unique_edition:0,
        edition:"",
        percentage:0
    }])
    const [data, setData] = useState<dataType | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    
    const fetch_unique = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:3003/unique_edition');
          setUnique_data(response.data);
        } catch (error) {
            setError(new Error('An error occurred'));
        } finally {
          setLoading(false);
        }
      }


 

      const change_data = () =>{

        const transformedData = unique_data.map((temp) => {
            return {
              id: temp.edition,
              label: temp.edition,
              value: temp.percentage,
              color: "hsl(163, 70%, 50%)",
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


if(data !=null){
    return (
        <div className='Pie'>
    
    
     
    <div className='right_card' >
          <p className="card-title">% Of Unique Holders</p>
        <div className="card" >
        <div style={{width:"100%",height:"100%"}}>
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
    
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 0,
                    itemWidth: 70,
                    itemHeight: 20,
                    itemsSpacing: 0,
                    symbolSize: 10,
                    itemDirection: 'left-to-right'
                }
            ]}
        />
            </div>
        
          </div>
        </div>
    
    
    
    
    
    </div>
    
       
    
        
      );
}
else{
    return <div>No data</div>;
}


}

export default Pie_Chart;

