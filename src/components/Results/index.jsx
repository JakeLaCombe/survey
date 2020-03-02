import React, { useState } from 'react';
import PieChart from 'react-minimal-pie-chart';
import ScoreCalculation from '../../ScoreCalculation';
import Button from '../Button';
import './Results.css';
import ContactForm from '../ContactForm';

export const InvestmentTitle = (score) => {
    if (score < 25) {
        return 'PRESERVATION OF CAPITAL';
    } else if (score < 50) {
        return 'BALANCED';
    } else if (score < 75) {
        return 'GROWTH AND INCOME';
    } else {
        return 'GROWTH FOCUSED';
    }
}

const InvestmentDescription = (score) => {
    if (score < 25) {
        return `YOU ARE GROWTH FOCUSED. YOUR PORTFOLIO VALUE MAY EXPERIENCE LARGE SWINGS UP OR DOWN.
        WE RECOMMEND THAT YOU ALLOCATE YOUR FUNDS INSIDE YOUR TSP AS FOLLOWS:`;
    } else if (score < 50) {
        return `YOU ARE GROWTH AND INCOME FOCUSED. YOUR PORTFOLIO VALUE MAY EXPERIENCE MODERATE
        SWINGS UP OR DOWN. WE RECOMMEND THAT YOU ALLOCATE THE FUNDS INSIDE YOUR TSP AS
        FOLLOWS:`;
    } else if (score < 75) {
        return `YOU ARE BALANCED FOCUSED. BOTH GROWTH AND INCOME ARE EQUALLY IMPORTANT IN YOUR
        PORTFOLIO. YOU CAN EXPECT MODERATE TO LESS THAN MODERATE SWINGS UP OR DOWN IN THE
        VALUE OF YOUR TSP ACCOUNT. WE RECOMMEND THAT YOU ALLOCATE YOUR FUNDS INSIDE YOUR TSP
        AS FOLLOWS:`;
    } else {
        return `YOU ARE FOCUSED ON PRESERVING WHAT YOU HAVE SAVED. YOUR PORTFOLIO VALUE MAY STILL
        EXPERIENCE VOLITILITY BUT IS EXPECTED TO BE MUCH LESS THAN MARKET AVERAGE. WE
        RECOMMEND THAT YOU ALLOCATE YOUR FUNDS INSIDE YOUR TSP AS FOLLOWS:`;
    }
}

const InvestmentRatios = (score) => {
    if (score < 25) {
        return {
            C: 50,
            S: 25,
            I: 25,
            F: 0,
            G: 0,
        }
    } else if (score < 50) {
        return {
            C: 50,
            S: 10,
            I: 15,
            F: 25,
            G: 0,
        }
    } else if (score < 75) {
        return {
            C: 45,
            S: 0,
            I: 10,
            F: 45,
            G: 0,
        }
    } else {
        return {
            C: 10,
            S: 0,
            I: 10,
            F: 10,
            G: 70,
        }
    }
}

const Results = ({ answers }) => {
    const score = ScoreCalculation(answers);
    const ratios = InvestmentRatios(100);
    const [sendingEmail, setSendingEmail] = useState(false);

    return (
        <>
            {sendingEmail && <ContactForm score={score} />}
            {!sendingEmail && (
                <>
                    <h1 className="results-title">{InvestmentTitle(score)}</h1>
                    <p className="results-description">{InvestmentDescription(score)}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '60%', marginLeft: '1em' }}>
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-out"
                                cx={50}
                                cy={50}
                                label={({ data, dataIndex }) =>
                                    data[dataIndex].percentage > 0 ? Math.round(data[dataIndex].percentage) + '%' : null
                                }
                                labelPosition={110}
                                labelStyle={{
                                    fill: '#000000',
                                    fontFamily: 'sans-serif',
                                    fontSize: '1em'
                                }}
                                data={[
                                    { title: 'C', value: ratios.C, color: 'rgb(210, 76, 88)' },
                                    { title: 'S', value: ratios.S, color: 'rgb(51, 76, 130)' },
                                    { title: 'I', value: ratios.I, color: '#AA82B9' },
                                    { title: 'F', value: ratios.F, color: '#599675' },
                                    { title: 'G', value: ratios.G, color: '#E3D170' }
                                ]}
                                startAngle={0}
                                lengthAngle={360}
                                lineWidth={100}
                                paddingAngle={0}
                                radius={40}
                                rounded={false}
                                viewBoxSize={[
                                    400,
                                    400
                                ]}
                            />
                        </div>
                        <div style={{ display: 'flex', width: '33%', justifyContent: 'center', marginLeft: 'auto', marginRight: '1em' }}>
                            <div display="table">
                                {ratios.C > 0 && <div className="legend"><span className="legend-color legend-color-c" />C Plan</div>}
                                {ratios.S > 0 && <div className="legend"><span className="legend-color legend-color-s" />S Plan</div>}
                                {ratios.I > 0 && <div className="legend"><span className="legend-color legend-color-i" />I Plan</div>}
                                {ratios.F > 0 && <div className="legend"><span className="legend-color legend-color-f" />F Plan</div>}
                                {ratios.G > 0 && <div className="legend"><span className="legend-color legend-color-g" />G Plan</div>}
                            </div>
                        </div>

                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '3em' }}>
                        <Button onClick={() => { setSendingEmail(true) }}>Contact an Advisor</Button>
                    </div>
                </>)}
        </>
    );
}

export default Results