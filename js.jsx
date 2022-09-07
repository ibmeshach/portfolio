const [style, setStyle] = useState('services__modal');


const changeStyle = () => {
  setStyle('services__modal-reveal')
}

const cancelStyle = () => {
  setStyle('services__modal')
}











<article className='about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <div className='services__title'>
                    <h3>Experience</h3>
                    <p className='p-text'>20+ Completed</p>
                  </div>
                    
                      <span className="services__button" onClick={changeStyle}>
                        See more <AiOutlineArrowRight className='services__icon'/>
                      </span>
                   
               
                 

                  <div className={style}>
                    <div className="services__modal-content">
                        <AiOutlineClose  className='services__modal-close' onClick={cancelStyle}/>

                        <h3 className="services__modal-title">
                          Student of uniben
                        </h3>
                        <p className="services__modal-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam quae molestias? Assumenda expedita 
                          quibusdam fugit excepturi blanditiis minima nobis quidem nam minus facilis eius earum dolore, alias possimus ratione?
                        </p>
                          <ul className="services__modal-list">
                            <li className="services__modal-item">
                             <AiOutlineCheck className='services__modal-icon' />
                             <p className="services__modal-info">
                                i have passion to study enginerring
                             </p>
                            </li>

                            <li className="services__modal-item">
                             <AiOutlineCheck className='services__modal-icon' />
                             <p className="services__modal-info">
                               i love going to school
                             </p>
                            </li>

                            <li className="services__modal-item">
                             <AiOutlineCheck className='services__modal-icon' />
                             <p className="services__modal-info">
                               i love going to school
                             </p>
                            </li>

                            <li className="services__modal-item">
                             <AiOutlineCheck className='services__modal-icon' />
                             <p className="services__modal-info">
                               i love going to school
                             </p>
                            </li>

                            <li className="services__modal-item">
                             <AiOutlineCheck className='services__modal-icon' />
                             <p className="services__modal-info">
                               i love going to school
                             </p>
                            </li>

                            <li className="services__modal-item">
                             <AiOutlineCheck className='services__modal-icon' />
                             <p className="services__modal-info">
                               i love going to school
                             </p>
                            </li>

                            
                          </ul>
                       
                    </div>
                  </div>
                </article>



















// .services__modal {
//     position: fixed;
//     inset: 0;
//     background-color: white;
//     padding: 2rem 1rem;
//     display: grid;
//     grid-template-columns: repeat(1, 1fr);
//     place-items: center;
//     visibility: hidden;
//     opacity: 0;
//     transition: .4s;
//     z-index: 2;
// }
// .services__modal-reveal {
//     position: fixed;
//     inset: 0;
//     background:transparentize($color:#EDF2F8, $amount: 0.5);
//     padding: 2rem 1rem;
//     display: grid;
    
//     place-items: center;
//     // visibility: hidden;
//     // opacity: 0;
    
//     transition: .4s;
//     z-index: 2;
    
// }

// .services__modal-content{
//     position: relative;
     
//     background-color: var(--secondary-color);
//     padding: 4.5rem 1.5rem 2.5rem;
//     border-radius: 1.5rem;
//     color: white;
// }

// .services__modal-title,
// .services__modal-description{
//     text-align: center;
    
    
// }
 
// .services__modal-title{
//     margin-bottom: 1rem;
//     color: #EDF2F8;
//     font-size: 20px;
// }

// .services__modal-description{ 
//     margin-bottom: 2rem;
    
//     font-size: 16px;
    
// }

// .services__modal-list{
//     display: grid;
//     row-gap: .75rem;
    
//     list-style-type: none;
// }

// .services__modal-item{
//     display: flex;
//     align-items: flex-start;
//     column-gap: .5rem;
// }

// .services__modal-icon{
//     font-size: 1.5rem;
//     color: white;


// }

// .services__modal-info{
//     font-size: h5;
    
// }

// .services__modal-close{
//     position: absolute;
//     top: 1.5rem;
//     right: 1.5rem;
//     font-size: 1.5rem;
//     color:white;
//     cursor: pointer;

// }
