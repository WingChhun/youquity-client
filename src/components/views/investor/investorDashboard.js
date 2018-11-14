import React from 'react';

import '../../../css/views/investor/investorDashboard.scss';

export default function InvestorDashboard(props) {
    return (
        <main className="mainContainer">
            <section class="investorSummary">
                <ul>
                    <li><strong>Total Amount Invested:</strong><span class="data">$100,000</span></li>
                    <li><strong># of Companies Invested In:</strong><span class="data">3</span></li>
                    <li><strong>Current Valuation:</strong><span class="data">$123,000</span></li>
                    <li><strong>Net Gain/Loss:</strong><span class="data">+$23,000</span></li>
                </ul>
            </section>
            <section class="investmentDetails">
                <article class="detailCard">
                    <header><h3>Company A</h3></header>
                    <section class="cardDetails">
                        <ul>
                            <li><strong>Total Investment in Company A:</strong><span class="data">$50,000</span></li>
                            <li><strong>Average Price Per Share:</strong><span class="data">$10.00</span></li>
                            <li><strong># of Shares:</strong><span class="data">5,000</span></li>
                            <li><strong>Current Valuation:</strong><span class="data">$55,000 ($11.00/share)</span></li>
                            <li><strong>Net Gain/Loss:</strong><span class="data">+$5,000</span></li>
                        </ul>
                    </section>
                    <footer><button>More Details</button></footer>
                </article>
                <article class="detailCard">
                    <header><h3>Company B</h3></header>
                    <section class="cardDetails">
                        <ul>
                            <li><strong>Total Investment in Company B:</strong><span class="data">$40,000</span></li>
                            <li><strong>Average Price Per Share:</strong><span class="data">$1.00</span></li>
                            <li><strong># of Shares:</strong><span class="data">40,000</span></li>
                            <li><strong>Current Valuation:</strong><span class="data">$32,000 ($0.80/share)</span></li>
                            <li><strong>Net Gain/Loss:</strong><span class="data">-$8,000</span></li>
                        </ul>
                    </section>
                    <footer><button>More Details</button></footer>
                </article>
                <article class="detailCard">
                    <header><h3>Company C</h3></header>
                    <section class="cardDetails">
                        <ul>
                            <li><strong>Total Investment in Company C:</strong><span class="data">$10,000</span></li>
                            <li><strong>Average Price Per Share:</strong><span class="data">$2.00</span></li>
                            <li><strong># of Shares:</strong><span class="data">5,000</span></li>
                            <li><strong>Current Valuation:</strong><span class="data">$36,000 ($7.20/share)</span></li>
                            <li><strong>Net Gain/Loss:</strong><span class="data">+$26,000</span></li>
                        </ul>
                    </section>
                    <footer><button>More Details</button></footer>
                </article>
            </section>
        </main>
    );
}