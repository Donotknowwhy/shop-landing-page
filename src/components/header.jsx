import { Row, Col } from "antd"

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <div class="container-title">
                  <h2 class="title">
                    <span class="title-word title-word-1">Phụ </span>
                    <span class="title-word title-word-2">Kiện </span>
                    <span class="title-word title-word-3">99</span>
                  </h2>
                </div>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll' style={{ fontSize: '20px', background: 'red' }}
                >
                  Mua luôn
                </a>
                <br />
                <br />
                <div class="container-sale">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <h3 class="animate-charcter"> Giảm giá 50%</h3>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Sốc - Chỉ <span style={{ color: 'red', fontSize: '30px' }}>119k</span> 1 combo 3 món:  <br /> </p>

                <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                  <span className="span-content">Giá đỡ điện thoại  </span>
                  <span className="span-content">Dây sạc ba đầu  </span>
                  <span className="span-content">Củ sạc nhanh</span>
                </div>


                <div style={{ textAlign: 'center' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
