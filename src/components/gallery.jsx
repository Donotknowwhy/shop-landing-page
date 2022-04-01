import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sản phẩm</h2>
          <p>
            Combo 99k cực sốc.
          </p>
        </div>
        <div className='row'>

          <img src="img/bg7.jpg" alt="img" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  )
}
