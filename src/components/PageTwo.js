import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

class PageTwo extends Component {
    render() {
        return(
            <div>
                <Nav active='2' />
                <div className='content'>
                    <div className='rows'>
                        <div className='columni column-3'>
                            <Link to='https://google.com'>Google</Link>
                        </div>
                        <div className='columni column-3'>
                            <Link to='https://yahoo.com'>Yahoo</Link>
                        </div>
                        <div className='columni column-3'>
                            <Link to='https://bing.com'>Bing</Link>
                        </div>
                        <div className='columni column-3'>
                            <Link to='https://duckduckgo.com'>Duck Duck Go</Link>
                        </div>
                    </div>
                    <div className='rows'>
                        <div className='columni column-4'>
                            <p>
                                Spicy jalapeno bacon ipsum dolor amet pig landjaeger pork ribeye strip steak jowl drumstick cupim meatloaf t-bone corned beef pancetta pork loin pastrami pork belly. Turkey meatball chuck beef ribs ham hock landjaeger. Venison fatback ground round cupim bresaola ball tip. Cupim ham hock sausage bacon. Drumstick prosciutto meatball, cupim shankle pork salami hamburger picanha ham hock bacon shoulder filet mignon. Strip steak bresaola ground round doner. Shankle corned beef pork, pork belly ball tip sirloin filet mignon cupim capicola boudin shank tenderloin flank.
                            </p>
                        </div>
                        <div className='columni column-4'>
                            <p>
                                 Beef kevin shoulder porchetta, pastrami jerky strip steak cupim ball tip buffalo landjaeger shankle salami. Pork chop shankle boudin, frankfurter fatback short ribs beef ribs turducken cow meatloaf prosciutto chuck filet mignon. Short loin beef bresaola chuck bacon shankle strip steak rump picanha tail kielbasa porchetta ground round venison. Meatloaf landjaeger short loin, bresaola doner short ribs leberkas tenderloin shoulder. Turkey bresaola buffalo brisket, corned beef leberkas doner short loin fatback andouille t-bone pastrami beef ribs. Flank brisket capicola spare ribs biltong salami tenderloin.
                            </p>
                        </div>
                        <div className='columni column-4'>
                            <p>
                                Porchetta burgdoggen ribeye jerky meatloaf, shankle hamburger venison pig bacon buffalo sirloin leberkas picanha corned beef. Salami turducken pig short ribs pork chop burgdoggen, pork meatloaf shoulder kevin ham landjaeger bacon t-bone. Pork pork chop swine filet mignon. Picanha burgdoggen meatball corned beef. Burgdoggen doner kevin pig chuck.

                                Pork frankfurter picanha cow prosciutto capicola. Hamburger meatloaf capicola burgdoggen ball tip drumstick pastrami pork loin. Short loin pork turducken leberkas andouille alcatra jowl brisket beef ribs drumstick hamburger chuck pig porchetta capicola. Leberkas landjaeger shank buffalo ground round. Turkey fatback jerky biltong.
                            </p>
                        </div>
                    </div>
                    <div className='rows'>
                        <div className='columni column-4'>
                            <p>
                                Spicy jalapeno bacon ipsum dolor amet pig landjaeger pork ribeye strip steak jowl drumstick cupim meatloaf t-bone corned beef pancetta pork loin pastrami pork belly. Turkey meatball chuck beef ribs ham hock landjaeger. Venison fatback ground round cupim bresaola ball tip. Cupim ham hock sausage bacon. Drumstick prosciutto meatball, cupim shankle pork salami hamburger picanha ham hock bacon shoulder filet mignon. Strip steak bresaola ground round doner. Shankle corned beef pork, pork belly ball tip sirloin filet mignon cupim capicola boudin shank tenderloin flank.
                            </p>
                        </div>
                        <div className='columni column-4'>
                            <p>
                                 Beef kevin shoulder porchetta, pastrami jerky strip steak cupim ball tip buffalo landjaeger shankle salami. Pork chop shankle boudin, frankfurter fatback short ribs beef ribs turducken cow meatloaf prosciutto chuck filet mignon. Short loin beef bresaola chuck bacon shankle strip steak rump picanha tail kielbasa porchetta ground round venison. Meatloaf landjaeger short loin, bresaola doner short ribs leberkas tenderloin shoulder. Turkey bresaola buffalo brisket, corned beef leberkas doner short loin fatback andouille t-bone pastrami beef ribs. Flank brisket capicola spare ribs biltong salami tenderloin.
                            </p>
                        </div>
                        <div className='columni column-4'>
                            <p>
                                Porchetta burgdoggen ribeye jerky meatloaf, shankle hamburger venison pig bacon buffalo sirloin leberkas picanha corned beef. Salami turducken pig short ribs pork chop burgdoggen, pork meatloaf shoulder kevin ham landjaeger bacon t-bone. Pork pork chop swine filet mignon. Picanha burgdoggen meatball corned beef. Burgdoggen doner kevin pig chuck.

                                Pork frankfurter picanha cow prosciutto capicola. Hamburger meatloaf capicola burgdoggen ball tip drumstick pastrami pork loin. Short loin pork turducken leberkas andouille alcatra jowl brisket beef ribs drumstick hamburger chuck pig porchetta capicola. Leberkas landjaeger shank buffalo ground round. Turkey fatback jerky biltong.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageTwo