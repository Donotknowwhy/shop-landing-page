export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1 style={{ fontSize: '60px' }}>
                  Phụ kiện 99
                  <span></span>
                </h1>
                <br />
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll' style={{ fontSize: '20px', background: 'red' }}
                >
                  Mua luôn
                </a>{' '}
                <br />
                <br />
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Sốc - Chỉ <span style={{ color: 'red', fontSize: '30px' }}>129k</span> 1 combo 3 món: <br /> + Gía đỡ <br /> + Củ sạc <br /> + Dây sạc ba đầu </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
