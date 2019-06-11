import React, { Component } from 'react'
import { Grid, Image, Icon,Divider } from 'semantic-ui-react'
import Profile from '../img/Profile.jpg'

export default class index extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row only='computer'>
                    <Grid.Column width={4}>
                        <Image src={Profile} style={{ paddingLeft: '2em', }} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div >
                            <div style={{ fontSize: '2.5em', fontWeight: 'bold', paddingBottom: '1em' }}>吳苡澤(Bryant)</div>
                            <div style={{ fontSize: '1.3em', paddingBottom: '1em' }}>
                                畢業於致理科技大學，在學期間擔任過系籃副隊長、修習資料庫設計與實務、網頁設計等程式類相關課程以提升自己的程式能力。
                                <br />
                                我喜歡自己動手做，雖然會遇到挫折，但我認為從失敗中學習，才能更有效的成長。因此，我於致理科技大學未來超市開發一套半自助結帳系統，透過開發的過程，更能夠清楚了解自己所欠缺的能力。
                                <br />
                                我樂於和人互動、建立良好關係並樂育接受挑戰，藉由挑戰來磨練自己的能力，以提升工作效率。
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div> <Icon name='phone' />
                                <span style={{ fontSize: '1em' }}> 連絡電話：0922-705-353</span>
                            </div>
                            <div>
                                <Icon name='mail' /><span style={{ fontSize: '1em' }}>E-Mail&nbsp;:&nbsp;&nbsp;bryantwu1231@gmail.com</span>
                            </div>
                        </div>
                        <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='computer'>
                    <Grid.Column width={6}>
                        <div style={{ paddingLeft: '1em', textAlign: 'left', fontWeight: 'bold', fontFamily: '標楷體', }}>
                            <span style={{ fontSize: '2em' }}>技能</span>
                            <hr />
                            <span style={{ fontSize: '1em' }}> - React.js</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - Vue.js</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - PHP</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - RWD</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - React Redux</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - API串接</span>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <div style={{ paddingLeft: '1em', fontWeight: 'bold', fontFamily: '標楷體' }}>
                            <span style={{ fontSize: '2em' }}>語言能力</span>
                            <hr />
                            <span style={{ fontSize: '1em' }}> - 中文(精通)</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - 台語(普通)</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - 英語(普通)</span>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div style={{ paddingLeft: '1em', fontWeight: 'bold', fontFamily: '標楷體' }}>
                            <span style={{ fontSize: '2em' }}>參賽紀錄</span>
                            <hr />
                            <span style={{ fontSize: '1em' }}> - 韓國WiC創新發明大賽：1面金牌、1面特別獎</span>
                            <br />
                            <span style={{ fontSize: '1em' }}> - 跨界超越競賽：進入複賽</span>
                        </div>
                    </Grid.Column>
                </Grid.Row>

            </Grid>)
    }
}
