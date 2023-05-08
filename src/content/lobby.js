import ReactionImage from '../assets/images/icon-reaction.svg';
import MemoryImage from '../assets/images/icon-memory.svg';
import VerbalImage from '../assets/images/icon-verbal.svg';
import VisualImage from '../assets/images/icon-visual.svg';

function Lobby(){
    return(
        <div className='allpage'>
            <div className='container columns-container'>
                <div className='result-container'>
                    <div className='result-title-container'>
                        <p className='result-title'>
                            Your Result
                        </p>
                    </div>
                    <div className='result-data-circle'>
                        <p className='your-percentaje-result-data-circle'>
                            76
                        </p>
                        <p className='total-percentaje-result-data-circle'>
                            of 100
                        </p>
                    </div>
                    <p className='result-status'>
                        Great
                    </p>
                    <div className='result-population-container'>
                        <p className='result-population'>
                            You scored higher than 65% of the people who have taken these tests.
                        </p>
                    </div>
                </div>
                <div className='summary-container'>
                    <div className='summary-title-container'>
                        <p className='summary-title'>
                            Summary
                        </p>
                    </div>
                    <div className='summary-all-containers'>
                        <div className='summary-reaction'>
                            <img alt='ReactionImage' src={ReactionImage}/>
                            <p className='summary-reaction-text'>
                                Reaction
                            </p>
                            <div className='summary-memory-real-percentaje-container'>
                                <p className='summary-memory-real-percentaje'>80 <span>/ 100</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='summary-all-containers'>
                        <div className='summary-memory'>
                            <img alt='MemoryImage' src={MemoryImage}/>
                            <p className='summary-memory-text'>
                                Memory
                            </p>
                            <div className='summary-memory-real-percentaje-container'>
                                <p className='summary-memory-real-percentaje'>92 <span>/ 100</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='summary-all-containers'>
                        <div className='summary-verbal'>
                            <img alt='VerbalImage' src={VerbalImage}/>
                            <p className='summary-verbal-text'>
                                Verbal   
                            </p>
                            <div className='summary-memory-real-percentaje-container'>
                                <p className='summary-memory-real-percentaje'>61 <span>/ 100</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='summary-all-containers'>
                        <div className='summary-visual'>
                            <img alt='VisualImage' src={VisualImage}/>
                            <p className='summary-visual-text'>
                                Visual
                            </p>
                            <div className='summary-memory-real-percentaje-container'>
                                <p className='summary-memory-real-percentaje'>72 <span>/ 100</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='button-container'>
                        <input type='button' value='Continue'/>
                    </div>
                </div>
            </div>
            <div className='footer-page'>
                <p>Created by <a href="https://github.com/Farith-Palestina">Farith Palestina</a>.</p>
            </div>
        </div>
    );
}

export default Lobby;