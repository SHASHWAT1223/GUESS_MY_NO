#include<bits/stdc++.h>
using namespace std;
#define ll               long long
#define pb                push_back
#define ppb               pop_back
#define pf                push_front
#define ppf               pop_front
#define all(x)            (x).begin(),(x).end()
#define uniq(v)           (v).erase(unique(all(v)),(v).end())
#define sz(x)             (int)((x).size())
#define fr                first
#define sc                second
#define pii               pair<int,int>
#define rep(i,n)          for(int i=0;i<n;i++)
#define REP(i,a,b)        for(int i=a;i<b;i++)
#define mem1(a)           memset(a,-1,sizeof(a))
#define mem0(a)           memset(a,0,sizeof(a))
#define ppc               __builtin_popcount
#define ppcll             __builtin_popcountll
template<typename T, typename U> static inline void amin(T &x, U y){ if(y < x) x = y; }
template<typename T, typename U> static inline void amax(T &x, U y){ if(x < y) x = y; }

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<int> v;
        map<int,int> m;
        rep(i,n)
        {
            int x;
            cin>>x;
            v.pb(x);
            m[abs(x)]++;
        }
        int count=0;
        for(auto pr:m)
        {
            if(pr.second>=2&&pr.first!=0)
            {
                count= count + 2;
            }
            else
            {
                count++;
            }
        }
        cout<<count<<endl;
    }
}