// GLOWExtras.js r1 - http://github.com/empaempa/GLOW
GLOW.Float=function(a){this.value=a!==void 0?a:0};GLOW.Int=function(a){this.value=a!==void 0?a:0};GLOW.Vector3=function(a,b,c){this.value=new Float32Array(3);this.value[0]=a!==void 0?a:0;this.value[1]=b!==void 0?b:0;this.value[2]=c!==void 0?c:0};GLOW.Vector3.prototype.set=function(a,b,c){this.value[0]=a;this.value[1]=b;this.value[2]=c;return this};GLOW.Vector3.prototype.copy=function(){this.set(this.value[0],this.value[1],this.value[2]);return this};
GLOW.Vector3.prototype.add=function(a,b){a=a.value;b=b.value;this.value[0]=a[0]+b[0];this.value[1]=a[1]+b[1];this.value[2]=a[2]+b[2];return this};GLOW.Vector3.prototype.addSelf=function(a){a=a.value;this.value[0]+=a[0];this.value[1]+=a[1];this.value[2]+=a[2];return this};GLOW.Vector3.prototype.addScalar=function(a){this.value[0]+=a;this.value[1]+=a;this.value[2]+=a;return this};
GLOW.Vector3.prototype.sub=function(a,b){a=a.value;b=b.value;this.value[0]=a[0]-b[0];this.value[1]=a[1]-b[1];this.value[2]=a[2]-b[2];return this};GLOW.Vector3.prototype.subSelf=function(a){a=a.value;this.value[0]-=a[0];this.value[1]-=a[1];this.value[2]-=a[2];return this};GLOW.Vector3.prototype.cross=function(a,b){a=a.value;b=b.value;this.value[0]=a[1]*b[2]-a[2]*b[1];this.value[1]=a[2]*b[0]-a[0]*b[2];this.value[2]=a[0]*b[1]-a[1]*b[0];return this};
GLOW.Vector3.prototype.crossSelf=function(a){var a=a.value,b=a[0],c=a[1],a=a[2],d=this.value[0],e=this.value[1],g=this.value[2];this.value[0]=c*g-a*e;this.value[1]=a*d-b*g;this.value[2]=b*e-c*d;return this};GLOW.Vector3.prototype.multiply=function(a,b){a=a.value;b=b.value;this.value[0]=a[0]*b[0];this.value[1]=a[1]*b[1];this.value[2]=a[2]*b[2];return this};GLOW.Vector3.prototype.multiplySelf=function(a){a=a.value;this.value[0]*=a[0];this.value[1]*=a[1];this.value[2]*=a[2];return this};
GLOW.Vector3.prototype.multiplyScalar=function(a){this.value[0]*=a;this.value[1]*=a;this.value[2]*=a;return this};GLOW.Vector3.prototype.divideSelf=function(a){a=a.value;this.value[0]/=a[0];this.value[1]/=a[1];this.value[2]/=a[2];return this};GLOW.Vector3.prototype.divideScalar=function(a){this.value[0]/=a;this.value[1]/=a;this.value[2]/=a;return this};GLOW.Vector3.prototype.negate=function(){this.value[0]=-this.value[0];this.value[1]=-this.value[1];this.value[2]=-this.value[2];return this};
GLOW.Vector3.prototype.dot=function(a){a=a.value;return this.value[0]*a[0]+this.value[1]*a[1]+this.value[2]*a[2]};GLOW.Vector3.prototype.distanceTo=function(a){return Math.sqrt(this.distanceToSquared(a))};GLOW.Vector3.prototype.distanceToSquared=function(a){var a=a.value,b=this.value[0]-a[0],c=this.value[1]-a[1],a=this.value[2]-a[2];return b*b+c*c+a*a};GLOW.Vector3.prototype.length=function(){return Math.sqrt(this.lengthSq())};
GLOW.Vector3.prototype.lengthSq=function(){return this.value[0]*this.value[0]+this.value[1]*this.value[1]+this.value[2]*this.value[2]};GLOW.Vector3.prototype.lengthManhattan=function(){return this.value[0]+this.value[1]+this.value[2]};GLOW.Vector3.prototype.normalize=function(){var a=Math.sqrt(this.value[0]*this.value[0]+this.value[1]*this.value[1]+this.value[2]*this.value[2]);a>0?this.multiplyScalar(1/a):this.set(0,0,0);return this};
GLOW.Vector3.prototype.setPositionFromMatrix=function(a){a=a.value;this.value[0]=a[12];this.value[1]=a[13];this.value[2]=a[14]};GLOW.Vector3.prototype.setLength=function(a){return this.normalize().multiplyScalar(a)};GLOW.Vector3.prototype.isZero=function(){return Math.abs(this.value[0])<1.0E-4&&Math.abs(this.value[1])<1.0E-4&&Math.abs(this.value[2])<1.0E-4};GLOW.Vector3.prototype.clone=function(){return GLOW.Vector3(this.value[0],this.value[1],this.value[2])};
GLOW.Matrix3=function(){this.value=new Float32Array(9);this.transposeUniform=!1};GLOW.Matrix3.prototype.set=function(a,b,c,d,e,g,h,f,j){this.value[0]=a;this.value[4]=b;this.value[8]=c;this.value[1]=d;this.value[5]=e;this.value[9]=g;this.value[2]=h;this.value[6]=f;this.value[10]=j;return this};GLOW.Matrix3.prototype.identity=function(){this.set(1,0,0,0,1,0,0,0,1);return this};
GLOW.Matrix4=function(){this.value=new Float32Array(16);this.transposeUniform=!1;this.rotation=new GLOW.Vector3;this.position=new GLOW.Vector3;this.columnX=new GLOW.Vector3;this.columnY=new GLOW.Vector3;this.columnZ=new GLOW.Vector3;this.identity()};
GLOW.Matrix4.prototype.set=function(a,b,c,d,e,g,h,f,j,l,k,i,n,q,o,p){this.value[0]=a;this.value[4]=b;this.value[8]=c;this.value[12]=d;this.value[1]=e;this.value[5]=g;this.value[9]=h;this.value[13]=f;this.value[2]=j;this.value[6]=l;this.value[10]=k;this.value[14]=i;this.value[3]=n;this.value[7]=q;this.value[11]=o;this.value[15]=p;return this};GLOW.Matrix4.prototype.identity=function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this};
GLOW.Matrix4.prototype.copy=function(a){a=a.value;this.set(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]);return this};
GLOW.Matrix4.prototype.lookAt=function(a,b){var c=GLOW.Matrix4.tempVector3A,d=GLOW.Matrix4.tempVector3B,e=GLOW.Matrix4.tempVector3C,g=this.getPosition();g.value[0]=this.value[12];g.value[1]=this.value[13];g.value[2]=this.value[14];e.sub(g,a).normalize();e.length()===0&&(e.value[3]=1);c.cross(b,e).normalize();c.length()===0&&(e.value[0]+=1.0E-4,c.cross(b,e).normalize());d.cross(e,c).normalize();c=c.value;d=d.value;e=e.value;this.value[0]=c[0];this.value[4]=d[0];this.value[8]=e[0];this.value[1]=c[1];
this.value[5]=d[1];this.value[9]=e[1];this.value[2]=c[2];this.value[6]=d[2];this.value[10]=e[2];return this};
GLOW.Matrix4.prototype.multiplyVector3=function(a){var b=a.value[0],c=a.value[1],d=a.value[2],e=1/(this.value[3]*b+this.value[7]*c+this.value[11]*d+this.value[15]);a.value[0]=(this.value[0]*b+this.value[4]*c+this.value[8]*d+this.value[12])*e;a.value[1]=(this.value[1]*b+this.value[5]*c+this.value[9]*d+this.value[13])*e;a.value[2]=(this.value[2]*b+this.value[6]*c+this.value[10]*d+this.value[14])*e;return a};
GLOW.Matrix4.prototype.multiplyVector4=function(a){var b=a.value[0],c=a.value[1],d=a.value[2],e=a.value[3];a.value[0]=this.value[0]*b+this.value[4]*c+this.value[8]*d+this.value[12]*e;a.value[1]=this.value[1]*b+this.value[5]*c+this.value[9]*d+this.value[13]*e;a.value[2]=this.value[2]*b+this.value[6]*c+this.value[10]*d+this.value[14]*e;a.value[3]=this.value[3]*b+this.value[7]*c+this.value[11]*d+this.value[15]*e;return a};
GLOW.Matrix4.prototype.rotateAxis=function(a){var b=a.value[0],c=a.value[1],d=a.value[2];a.value[0]=b*this.value[0]+c*this.value[4]+d*this.value[8];a.value[1]=b*this.value[1]+c*this.value[5]+d*this.value[9];a.value[2]=b*this.value[2]+c*this.value[6]+d*this.value[10];a.normalize();return a};
GLOW.Matrix4.prototype.crossVector=function(a){var b=GLOW.Vector4(),c=a.value[0],d=a.value[1],e=a.value[2],a=a.value[3];b.value[0]=this.value[0]*c+this.value[4]*d+this.value[8]*e+this.value[12]*a;b.value[1]=this.value[1]*c+this.value[5]*d+this.value[9]*e+this.value[13]*a;b.value[2]=this.value[2]*c+this.value[6]*d+this.value[10]*e+this.value[14]*a;b.value[3]=a?this.value[3]*c+this.value[7]*d+this.value[11]*e+this.value[15]*a:1;return b};
GLOW.Matrix4.prototype.multiply=function(a,b){var a=a.value,b=b.value,c=a[0],d=a[4],e=a[8],g=a[12],h=a[1],f=a[5],j=a[9],l=a[13],k=a[2],i=a[6],n=a[10],q=a[14],o=a[3],p=a[7],r=a[11],t=a[15],s=b[0],u=b[4],v=b[8],w=b[12],x=b[1],y=b[5],z=b[9],A=b[13],B=b[2],C=b[6],D=b[10],E=b[14];this.value[0]=c*s+d*x+e*B;this.value[4]=c*u+d*y+e*C;this.value[8]=c*v+d*z+e*D;this.value[12]=c*w+d*A+e*E+g;this.value[1]=h*s+f*x+j*B;this.value[5]=h*u+f*y+j*C;this.value[9]=h*v+f*z+j*D;this.value[13]=h*w+f*A+j*E+l;this.value[2]=
k*s+i*x+n*B;this.value[6]=k*u+i*y+n*C;this.value[10]=k*v+i*z+n*D;this.value[14]=k*w+i*A+n*E+q;this.value[3]=o*s+p*x+r*B;this.value[7]=o*u+p*y+r*C;this.value[11]=o*v+p*z+r*D;this.value[15]=o*w+p*A+r*E+t;return this};GLOW.Matrix4.prototype.multiplySelf=function(a){this.multiply(m,a);return this};
GLOW.Matrix4.prototype.multiplyScalar=function(a){this.value[0]*=a;this.value[4]*=a;this.value[8]*=a;this.value[12]*=a;this.value[1]*=a;this.value[5]*=a;this.value[9]*=a;this.value[13]*=a;this.value[2]*=a;this.value[6]*=a;this.value[10]*=a;this.value[14]*=a;this.value[3]*=a;this.value[7]*=a;this.value[11]*=a;this.value[15]*=a;return this};
GLOW.Matrix4.prototype.determinant=function(){var a=this.value[0],b=this.value[4],c=this.value[8],d=this.value[12],e=this.value[1],g=this.value[5],h=this.value[9],f=this.value[13],j=this.value[2],l=this.value[6],k=this.value[10],i=this.value[14],n=this.value[3],q=this.value[7],o=this.value[11],p=this.value[15];return d*h*l*n-c*f*l*n-d*g*k*n+b*f*k*n+c*g*i*n-b*h*i*n-d*h*j*q+c*f*j*q+d*e*k*q-a*f*k*q-c*e*i*q+a*h*i*q+d*g*j*o-b*f*j*o-d*e*l*o+a*f*l*o+b*e*i*o-a*g*i*o-c*g*j*p+b*h*j*p+c*e*l*p-a*h*l*p-b*e*k*
p+a*g*k*p};GLOW.Matrix4.prototype.transpose=function(){var a;a=this.value[1];this.value[1]=this.value[4];this.value[4]=a;a=this.value[2];this.value[2]=this.value[8];this.value[8]=a;a=this.value[6];this.value[6]=this.value[9];this.value[9]=a;a=this.value[3];this.value[3]=this.value[12];this.value[12]=a;a=this.value[7];this.value[7]=this.value[13];this.value[13]=a;a=this.value[11];this.value[11]=this.value[14];this.value[11]=a;return this};
GLOW.Matrix4.prototype.clone=function(){var a=new GLOW.Matrix4;a.value=new Float32Array(m);return a};GLOW.Matrix4.prototype.setPosition=function(a,b,c){this.value[12]=a;this.value[13]=b;this.value[14]=c;return this};GLOW.Matrix4.prototype.addPosition=function(a,b,c){this.value[12]+=a;this.value[13]+=b;this.value[14]+=c};
GLOW.Matrix4.prototype.setRotation=function(a,b,c){this.rotation.set(a,b,c);var d=Math.cos(a),a=Math.sin(a),e=Math.cos(b),b=Math.sin(b),g=Math.cos(c),c=Math.sin(c),h=d*b,f=a*b;this.value[0]=e*g;this.value[4]=-e*c;this.value[8]=b;this.value[1]=f*g+d*c;this.value[5]=-f*c+d*g;this.value[9]=-a*e;this.value[2]=-h*g+a*c;this.value[6]=h*c+a*g;this.value[10]=d*e;return this};
GLOW.Matrix4.prototype.addRotation=function(a,b,c){this.rotation.value[0]+=a;this.rotation.value[1]+=b;this.rotation.value[2]+=c;this.setRotation(this.rotation.value[0],this.rotation.value[1],this.rotation.value[2])};GLOW.Matrix4.prototype.getPosition=function(){this.position.set(this.value[12],this.value[13],this.value[14]);return this.position};GLOW.Matrix4.prototype.getColumnX=function(){this.columnX.set(this.value[0],this.value[1],this.value[2]);return this.columnX};
GLOW.Matrix4.prototype.getColumnY=function(){this.columnY.set(this.value[4],this.value[5],this.value[6]);return this.columnY};GLOW.Matrix4.prototype.getColumnZ=function(){this.columnZ.set(this.value[8],this.value[9],this.value[10]);return this.columnZ};
GLOW.Matrix4.prototype.scale=function(a,b,c){var d;b!==void 0&&c!==void 0?d=a:(d=a.value[0],b=a.value[1],c=a.value[2]);this.value[0]*=d;this.value[4]*=b;this.value[8]*=c;this.value[1]*=d;this.value[5]*=b;this.value[9]*=c;this.value[2]*=d;this.value[6]*=b;this.value[10]*=c;this.value[3]*=d;this.value[7]*=b;this.value[11]*=c;return this};
GLOW.Matrix4.makeInverse=function(a,b){b===void 0&&(b=new GLOW.Matrix4);var c=a.value,d=b.value,e=c[0],g=c[4],h=c[8],f=c[12],j=c[1],l=c[5],k=c[9],i=c[13],n=c[2],q=c[6],o=c[10],p=c[14],r=c[3],t=c[7],s=c[11],c=c[15];d[0]=k*p*t-i*o*t+i*q*s-l*p*s-k*q*c+l*o*c;d[1]=i*o*r-k*p*r-i*n*s+j*p*s+k*n*c-j*o*c;d[2]=l*p*r-i*q*r+i*n*t-j*p*t-l*n*c+j*q*c;d[3]=k*q*r-l*o*r-k*n*t+j*o*t+l*n*s-j*q*s;d[4]=f*o*t-h*p*t-f*q*s+g*p*s+h*q*c-g*o*c;d[5]=h*p*r-f*o*r+f*n*s-e*p*s-h*n*c+e*o*c;d[6]=f*q*r-g*p*r-f*n*t+e*p*t+g*n*c-e*q*c;
d[7]=g*o*r-h*q*r+h*n*t-e*o*t-g*n*s+e*q*s;d[8]=h*i*t-f*k*t+f*l*s-g*i*s-h*l*c+g*k*c;d[9]=f*k*r-h*i*r-f*j*s+e*i*s+h*j*c-e*k*c;d[10]=h*i*r-f*l*r+f*j*t-e*i*t-g*j*c+e*l*c;d[11]=h*l*r-g*k*r-h*j*t+e*k*t+g*j*s-e*l*s;d[12]=f*k*q-h*i*q-f*l*o+g*i*o+h*l*p-g*k*p;d[13]=h*i*n-f*k*n+f*j*o-e*i*o-h*j*p+e*k*p;d[14]=f*l*n-g*i*n-f*j*q+e*i*q+g*j*p-e*l*p;d[15]=g*k*n-h*l*n+h*j*q-e*k*q-g*j*o+e*l*o;b.multiplyScalar(1/a.determinant());return b};
GLOW.Matrix4.makeFrustum=function(a,b,c,d,e,g){var h,f;h=new GLOW.Matrix4;f=h.value;f[0]=2*e/(b-a);f[4]=0;f[8]=(b+a)/(b-a);f[12]=0;f[1]=0;f[5]=2*e/(d-c);f[9]=(d+c)/(d-c);f[13]=0;f[2]=0;f[6]=0;f[10]=-(g+e)/(g-e);f[14]=-2*g*e/(g-e);f[3]=0;f[7]=0;f[11]=-1;f[15]=0;return h};GLOW.Matrix4.makeProjection=function(a,b,c,d){var e,a=c*Math.tan(a*Math.PI/360);e=-a;return GLOW.Matrix4.makeFrustum(e*b,a*b,e,a,c,d)};
GLOW.Matrix4.makeOrtho=function(a,b,c,d,e,g){var h,f,j,l,k;h=GLOW.Matrix4();j=b-a;l=c-d;k=g-e;f=h.value;f[0]=2/j;f[4]=0;f[8]=0;f[12]=-((b+a)/j);f[1]=0;f[5]=2/l;f[9]=0;f[13]=-((c+d)/l);f[2]=0;f[6]=0;f[10]=-2/k;f[14]=-((g+e)/k);f[3]=0;f[7]=0;f[11]=0;f[15]=1;return h};GLOW.Matrix4.tempVector3A=new GLOW.Vector3;GLOW.Matrix4.tempVector3B=new GLOW.Vector3;GLOW.Matrix4.tempVector3C=new GLOW.Vector3;GLOW.Matrix4.tempVector3D=new GLOW.Vector3;
GLOW.Geometry={randomVector3Array:function(a,b){var b=b!==void 0?b:1,c,d=[],e=b*2;for(c=0;c<a;c++)d.push(GLOW.Vector3(Math.random()*e-b,Math.random()*e-b,Math.random()*e-b));return d},elements:function(a){var b=0,c,d=new Uint16Array(a*3);for(c=0;c<a;c++)d[b]=b++,d[b]=b++,d[b]=b++;return d},faceNormals:function(a,b){var c=new Float32Array(a.length),d,e=b.length,g,h,f,j=new GLOW.Vector3,l=new GLOW.Vector3,k=new GLOW.Vector3,i=new GLOW.Vector3;for(d=0;d<e;)g=b[d++]*3,h=b[d++]*3,f=b[d++]*3,j.set(a[g+
0],a[g+1],a[g+2]),l.set(a[h+0],a[h+1],a[h+2]),k.set(a[f+0],a[f+1],a[f+2]),l.subSelf(j),k.subSelf(j),i.cross(k,l).normalize(),c[g+0]=i.value[0],c[g+1]=i.value[1],c[g+2]=i.value[2],c[h+0]=i.value[0],c[h+1]=i.value[1],c[h+2]=i.value[2],c[f+0]=i.value[0],c[f+1]=i.value[1],c[f+2]=i.value[2];return c}};
GLOW.Geometry.Cube={vertices:function(a){var b=new Float32Array(72),c=0,a=a!==void 0?a*0.5:5;b[c++]=+a;b[c++]=+a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=+a;
b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=+a;b[c++]=-a;b[c++]=-a;b[c++]=+a;return b},elements:function(){var a=new Uint16Array(36),b=0;a[b++]=0;a[b++]=1;a[b++]=2;a[b++]=0;a[b++]=2;a[b++]=3;a[b++]=4;a[b++]=5;a[b++]=6;a[b++]=4;a[b++]=6;a[b++]=7;a[b++]=8;a[b++]=9;a[b++]=
10;a[b++]=8;a[b++]=10;a[b++]=11;a[b++]=12;a[b++]=13;a[b++]=14;a[b++]=12;a[b++]=14;a[b++]=15;a[b++]=16;a[b++]=17;a[b++]=18;a[b++]=16;a[b++]=18;a[b++]=19;a[b++]=20;a[b++]=21;a[b++]=22;a[b++]=20;a[b++]=22;a[b++]=23;return a},uvs:function(){var a=new Float32Array(48),b=0;a[b++]=0;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=0;
a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;return a}};
GLOW.Geometry.Plane={vertices:function(a){var b=new Float32Array(12),c=0,a=a!==void 0?a*0.5:1;b[c++]=+a;b[c++]=-a;b[c++]=0;b[c++]=+a;b[c++]=+a;b[c++]=0;b[c++]=-a;b[c++]=+a;b[c++]=0;b[c++]=-a;b[c++]=-a;b[c++]=0;return b},elements:function(){var a=new Uint16Array(6),b=0;a[b++]=0;a[b++]=1;a[b++]=2;a[b++]=0;a[b++]=2;a[b++]=3;return a},uvs:function(){var a=new Float32Array(8),b=0;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=1;a[b++]=0;a[b++]=1;a[b++]=0;a[b++]=0;return a}};
GLOW.Node=function(a){this.localMatrix=new GLOW.Matrix4;this.globalMatrix=new GLOW.Matrix4;this.viewMatrix=new GLOW.Matrix4;this.useXYZStyleTransform=!1;this.position={x:0,y:0,z:0};this.rotation={x:0,y:0,z:0};this.scale={x:1,y:1,z:1};this.children=[];this.parent=void 0;if(a)this.shader=a,this.draw=a.draw};
GLOW.Node.prototype.update=function(a,b){this.useXYZStyleTransform&&(this.localMatrix.setPosition(this.position.x,this.position.y,this.position.z),this.localMatrix.setRotation(this.rotation.x,this.rotation.y,this.rotation.z),this.localMatrix.scale(this.scale.x,this.scale.y,this.scale.z));a?this.globalMatrix.multiply(a,this.localMatrix):this.globalMatrix.copy(this.localMatrix);b&&this.viewMatrix.multiply(b,this.globalMatrix);var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.globalMatrix,
b);return this};GLOW.Node.prototype.addChild=function(a){if(this.children.indexOf(a)===-1)this.children.push(a),a.parent&&a.parent.removeChild(a),a.parent=this;return this};GLOW.Node.prototype.removeChild=function(a){var b=this.children.indexOf(a);if(b!==-1)this.children.splice(1,b),a.parent=void 0;return this};
GLOW.Camera=function(a){GLOW.Node.call(this);var a=a!==void 0?a:{},b=a.fov!==void 0?a.fov:40,c=a.aspect!==void 0?a.aspect:window.innerWidth/window.innerHeight,d=a.near!==void 0?a.near:0.1,e=a.far!==void 0?a.far:1E4;this.useTarget=a.useTarget!==void 0?a.useTarget:!0;this.projection=GLOW.Matrix4.makeProjection(b,c,d,e);this.inverse=new GLOW.Matrix4;this.target=new GLOW.Vector3(0,0,-100);this.up=new GLOW.Vector3(0,1,0);this.update()};GLOW.Camera.prototype=new GLOW.Node;
GLOW.Camera.prototype.constructor=GLOW.Camera;GLOW.Camera.prototype.supr=GLOW.Node.prototype;
GLOW.Camera.prototype.update=function(a,b){this.useXYZStyleTransform?(this.localMatrix.setPosition(this.position.x,this.position.y,this.position.z),this.useTarget?this.localMatrix.lookAt(this.target,this.up):this.localMatrix.setRotation(this.rotation.x,this.rotation.y,this.rotation.z),this.localMatrix.scale(this.scale.x,this.scale.y,this.scale.z)):this.useTarget&&this.localMatrix.lookAt(this.target,this.up);a?this.globalMatrix.multiply(a,this.localMatrix):this.globalMatrix.copy(this.localMatrix);
GLOW.Matrix4.makeInverse(this.globalMatrix,this.inverse);var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.globalMatrix,b)};GLOW.defaultCamera=new GLOW.Camera;