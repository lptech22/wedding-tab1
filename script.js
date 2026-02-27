(function(){
    var _0xd=document,_0xw=window;
    var _0$id=function(x){return _0xd.getElementById(x)};
    var _0$cl=function(x){return _0xd.querySelector(x)};
    var _0$cll=function(x){return _0xd.querySelectorAll(x)};
    
    var _s_w=_0$id('_ws'),_s_h=_0$cl('._hs'),_s_c=_0$cl('._cs'),_s_n=_0$cl('._nb'),_s_m=_0$id('_bm');
    var _n_i=_0$cll('._ni'),_p_c=_0$cll('._pc');
    var _m_p=false,_i_a=false;

    // Fungsi Buka Undangan (Global)
    _0xw['_oi']=function(){
        _s_w.style.display='none';
        _s_h.style.display='block';
        _s_c.style.display='block';
        _s_n.style.display='flex';
        _p_m();
    };

    function _p_m(){
        if(!_m_p){
            _s_m.volume=0.5;
            _s_m.play().then(function(){_m_p=true}).catch(function(){});
        }
    }

    // Navigasi
    for(var i=0;i<_n_i.length;i++){
        _n_i[i].addEventListener('click',function(){
            if(_i_a)return;
            var _t=this.getAttribute('data-target');
            var _cur=_0xd.querySelector('._pc._ac');
            var _tgt=_0$id(_t);
            if(_cur===_tgt)return;
            
            _i_a=true;
            _0xw.scrollTo({top:0,behavior:'smooth'});
            
            for(var j=0;j<_n_i.length;j++){ _n_i[j].classList.remove('_ac'); }
            this.classList.add('_ac');
            
            _cur.classList.add('_fo');
            setTimeout(function(){
                _cur.classList.remove('_ac');
                _cur.classList.remove('_fo');
                _tgt.classList.add('_ac');
                _i_a=false;
            },300);
        });
    }

    // Fungsi Salin (Global)
    _0xw['_ctc']=function(t){
        navigator.clipboard.writeText(t).then(function(){
            var x=_0$id('_tn');
            x.classList.add('_sh');
            setTimeout(function(){x.classList.remove('_sh')},2000);
        }).catch(function(){
            var a=_0xd.createElement('textarea');
            a.value=t;
            _0xd.body.appendChild(a);
            a.select();
            try{
                _0xd.execCommand('copy');
                var x=_0$id('_tn');
                x.classList.add('_sh');
                setTimeout(function(){x.classList.remove('_sh')},2000);
            }catch(e){ alert('Gagal menyalin'); }
            _0xd.body.removeChild(a);
        });
    };

    // Keamanan
    _0xd.addEventListener('contextmenu',function(e){e.preventDefault()});
    _0xd.addEventListener('keydown',function(e){
        if(e.key==='F12' || (e.ctrlKey && e.shiftKey && e.key==='I') || (e.ctrlKey && e.key==='u')){
            e.preventDefault();
        }
    });
})();