import { Row, Col } from "antd"


export const Header = (props) => {

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12  intro-text'>
                <div className="container-title">
                  <h2 className="title">
                    <span className="title-word title-word-1">Phụ </span>
                    <span className="title-word title-word-2">Kiện </span>
                    <span className="title-word title-word-3">99</span>
                  </h2>
                </div>

                <div className="container-sale">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h3 className="animate-charcter"> Giảm giá 60%</h3>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}><span style={{ textDecoration: 'line-through', fontSize: '30px' }}>299k</span> - Chỉ <span style={{ color: '#e74c3c', fontSize: '30px' }}>119k</span> 1 combo 3 món:  <br /> </p>

                <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
                  <span>Giá đỡ điện thoại  </span>
                  <span className="span-content">Dây sạc ba đầu  </span>
                  <span className="span-content">Củ sạc nhanh</span>
                </div>

                <br />
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll' style={{ fontSize: '20px', background: '#e74c3c' }}
                >
                  Mua luôn
                </a>

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
